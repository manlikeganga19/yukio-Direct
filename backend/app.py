from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///management.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

class Index(Resource):
  def get(self):
    return 'Welcome to Yukio\'s PMA....' 
  

if __name__ == '__main__':
  app.run(port=5555, debug=True)