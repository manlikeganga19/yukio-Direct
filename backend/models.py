from sqlalchemy_serializer import Serializer
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__= 'users'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  email_address = db.Column(db.String)
  role = db.Column(db.String)
  password = db.Column(db.String, nullable=False)

  def __repr__(self):
    return f'<User: {self.name} is a {self.role}'
  
class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  description = db.Column(db.String)
  start_date = db.Column(db.DateTime)
  end_date = db.Column(db.DateTime)

  def __repr__(self):
    return f'<Project: {self.title} is due by {self.end_date}'
  
class Task(db.Model):
  __tablename__ = 'tasks'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)
  description = db.Column(db.String)
  priority = db.Column(db.String)
  due_date = db.Column(db.DateTime)

  def __repr__(self):
    return f'<Task: {self.name} is due by {self.due_date} and is of priority: {self.priority}'