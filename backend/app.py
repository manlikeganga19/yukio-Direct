from flask import Flask, make_response, jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User, Project, Task

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///management.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)

class Index(Resource):
  def get(self):
    response_dict ={
      'index': 'Welcome to Yukio\'s Project Management Application'
    } 
    response = make_response(
      jsonify(response_dict),
      200
    )
    return response
api.add_response(Index, '/')

#Authentication
class Login(Resource):
  pass

class StayLogged(Resource):
  pass


#Routes for dashboard navbar
@app.route('/dashboard')
def dashboard():
  pass

@app.route('/dashboard/projects')
def show_projects():
  projects = Project.query.all()
  response_dict = [project.to_dict() for project in projects]
  response = make_response(
    jsonify(response_dict),
    200
  )
  return response

@app.route('/dashboard/tasks')
def show_tasks():
  tasks = Task.query.all()
  response_dict = [task.to_dict() for task in tasks]
  response = make_response(
    jsonify(response_dict),
    200
  )
  return response

# @app.route('/dashboard/profile')
# def show_profile():
#   users = User.query.all()
#   response_dict = [user.to_dict() for user in users]
#   response = make_response(
#     jsonify(response_dict),
#     200
#   )
#   return response

@app.route('/dashboard/logout')
def logout():
  pass
  
#Create methods
@app.route('/dashboard/create_project', methods=['POST'])
def create_project():
  pass

@app.route('/dashboard/create_task', methods=['POST'])
def create_task():
  pass

if __name__ == '__main__':
  app.run(port=5555, debug=True)