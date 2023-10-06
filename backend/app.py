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
            return make_response(jsonify(user.to_dict()), 201)
        else:
            return jsonify({"error": "Invalid credentials"}), 401
api.add_resource(Login, '/login')

class StayLogged(Resource):
  def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return jsonify(user.to_dict()), 200
        else:
            return jsonify({"error": "User is not logged in"}), 401     
api.add_resource(StayLogged, '/stay_logged')

class Logout(Resource):
    def delete(self):
        if 'user_id' in session:
            session.pop('user_id')
            return  {}, 204
        else:
            return jsonify({"error": "User is not logged in"}), 401
api.add_resource(Logout, '/logout')

class RegisterUser(Resource):
    def post(self):
        data = request.get_json()
        username = data['username']
        password = data['password']
        email_address = data['email_address']

        existing_user = User.query.filter_by(username=username).first()
        if existing_user:
            return jsonify({"error": "Username already exists"}), 400
        
        new_user = User(username=username,email_address=email_address)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        
        session['user_id'] = new_user.id
        return make_response(jsonify(new_user.to_dict()), 201)

api.add_resource(RegisterUser, '/register')

# Routes for dashboard navbar
class Dashboard(Resource):
    def dashboard(self):
        if 'user_id' in session:
            return redirect(url_for('/dashboard'))
        else:
            return redirect(url_for('/login'))
api.add_resource(Dashboard, '/dashboard')

class TaskList(Resource):
    def get(self):
        if 'user_id' in session:
            user = User.query.get(session['user_id'])
            if user:
                tasks = Task.query.filter(Task.project_id.in_([p.id for p in user.projects])).all()
                serialize_tasks = [task.to_dict() for task in tasks]
                return jsonify(serialize_tasks), 200
            else:
                return jsonify({"error": "User not found"}), 404
        else:
            return jsonify({"error": "Unauthorized"}), 401

    def post(self):
        if 'user_id' in session:
            data = request.json
            project_id = data.get('project_id')
            if project_id is None:
                return jsonify({"error": "Missing project_id in request data"}), 400

            new_task = Task(
                name=data['name'],
                description=data['description'],
                priority=data['priority'],
                due_date=data['due_date'],
                project_id=project_id
            )
            db.session.add(new_task)
            db.session.commit()
            return jsonify({"message": "Task created successfully"}, 201)
        else:
            return jsonify({"error": "Unauthorized"}), 401
api.add_resource(TaskList, '/dashboard/tasks')

class ProjectList(Resource):
    def get(self):
        if 'user_id' in session:
            user = User.query.get(session['user_id'])
            if user:
                projects = user.projects
                serialize_projects = [project.to_dict() for project in projects]
                return jsonify(serialize_projects), 200
            else:
                return jsonify({"error": "User not found"}), 404
        else:
            return jsonify({"error": "Unauthorized"}), 401

    def post(self):
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
api.add_resource(ProjectList, '/dashboard/projects')



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
    status = data.get('status')
    project = Project.query.get(project_id)
    if not project:
        return jsonify({"error": "Project not found"}), 404

    project.status = status
    db.session.commit()

    return jsonify({"message": "Project updated successfully", "project": project.to_dict()}), 200


if __name__ == '__main__':
  app.run(port=5555, debug=True)