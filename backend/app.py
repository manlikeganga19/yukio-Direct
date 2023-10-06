from flask import Flask,  make_response, jsonify, request, redirect, url_for, session
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User, Project, Task
import secrets


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///management.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = secrets.token_hex(16) 
CORS(app)

migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)

class Index(Resource):
  def get(self):
    return 'Welcome to Yukio\'s Project Management Application'
api.add_resource(Index, '/')

#Authentication
class Login(Resource):
  def post(self):
        data = request.json
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if user and user.check_password(password):
            session['user_id'] = user.id
            return jsonify({"message": "Logged in successfully"}), 200
        else:
            return jsonify({"error": "Invalid credentials"}), 401
api.add_resource(Login, '/login')

class StayLogged(Resource):
  def get(self):
        if 'user_id' in session:
            return jsonify({"message": "User is logged in"}), 200
        else:
            return jsonify({"error": "User is not logged in"}), 401
api.add_resource(StayLogged, '/stay_logged')

class Logout(Resource):
    def get(self):
        if 'user_id' in session:
            session.pop('user_id')
            return jsonify({"message": "Logged out successfully"}), 200
        else:
            return jsonify({"error": "User is not logged in"}), 401
api.add_resource(Logout, '/logout')

class RegisterUser(Resource):
    def post(self):
        data = request.json
        username = data.get('username')
        password = data.get('password')

        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return jsonify({"error": "Username already exists"}), 400
        
        new_user = User(username=username)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User registered successfully"}), 201

api.add_resource(RegisterUser, '/register')

# Routes for dashboard navbar
@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        return redirect(url_for('/dashboard'))
    else:
        return redirect(url_for('/login'))

@app.route('/dashboard/projects')
def show_projects():
    if 'user_id' in session:
        projects = Project.query.all()
        response_dict = [project.to_dict() for project in projects]
        response = make_response(jsonify(response_dict), 200)
        return response
    else:
        return jsonify({"error": "Unauthorized"}), 401

@app.route('/dashboard/tasks')
def show_tasks():
    if 'user_id' in session:
        tasks = Task.query.all()
        response_dict = [task.to_dict() for task in tasks]
        response = make_response(jsonify(response_dict), 200)
        return response
    else:
        return jsonify({"error": "Unauthorized"}), 401

# Create methods
@app.route('/dashboard/create_project', methods=['POST'])
def create_project():
    if 'user_id' in session:
        data = request.json  
        new_project = Project(
            title=data['title'],
            description=data['description'],
            start_date=data['start_date'],
            end_date=data['end_date'],
            owner_id=session['user_id'] 
        )
        db.session.add(new_project)
        db.session.commit()

        return jsonify({"message": "Project created successfully"}, 201)
    else:
        return jsonify({"error": "Unauthorized"}), 401

@app.route('/dashboard/create_task', methods=['POST'])
def create_task():
    if 'user_id' in session:
        data = request.json  
        new_task = Task(
            name=data['name'],
            description=data['description'],
            priority=data['priority'],
            due_date=data['due_date'],
            project_id=session['project_id'] 
        )
        db.session.add(new_task)
        db.session.commit()

        return jsonify({"message": "Project created successfully"}, 201)
    else:
        return jsonify({"error": "Unauthorized"}), 401

# @app.route('/dashboard/create_task', methods=['POST'])
# def create_task():
# <<<<<<< ft-newroute
#    if request.method == 'POST':
#         # Get data from the request
#         data = request.json  

# =======
#     if 'user_id' in session:
#         data = request.json
# >>>>>>> main
#         new_task = Task(
#             name=data['name'],
#             description=data['description'],
#             priority=data['priority'],
#             due_date=data['due_date'],
#             project_id=data['project_id'] 
#         )
#         db.session.add(new_task)
#         db.session.commit()

#         return jsonify({"message": "Task created successfully"}, 201)
#     else:
#         return jsonify({"error": "Unauthorized"}), 401

@app.route('/dashboard/delete_project/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    if 'user_id' in session:
        project = Project.query.get(project_id)
        if project:
            if project.owner_id == session['user_id']:
                db.session.delete(project)
                db.session.commit()
                return jsonify({"message": "Project deleted successfully"}), 200
            else:
                return jsonify({"error": "You don't have permission to delete this project"}), 403
        else:
            return jsonify({"error": "Project not found"}), 404
    else:
        return jsonify({"error": "Unauthorized"}), 401

#Delete methods
@app.route('/dashboard/delete_task/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    if 'user_id' in session:
        task = Task.query.get(task_id)
        if task:
            db.session.delete(task)
            db.session.commit()
            return jsonify({"message": "Task deleted successfully"}), 200
        else:
            return jsonify({"error": "Task not found"}), 404
    else:
        return jsonify({"error": "Unauthorized"}), 401


@app.route('/update_project/<int:project_id>', methods=['PUT'])
def update_project_status(project_id):
    data = request.json
    done = data.get('done')
    project = Project.query.get(project_id)
    if not project:
        return jsonify({"error": "Project not found"}), 404

    project.done = done
    db.session.commit()

    return jsonify({"message": "Project updated successfully", "project": project.to_dict()}), 200


if __name__ == '__main__':
  app.run(port=5555, debug=True)