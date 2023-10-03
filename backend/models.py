from sqlalchemy_serializer import SerializerMixin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

user_project_association = db.Table(
    'user_project_association',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('project_id', db.Integer, db.ForeignKey('projects.id')),
    db.Column('role', db.String)
)
class User(db.Model):
  __tablename__= 'users'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  email_address = db.Column(db.String)
  role = db.Column(db.String)
  password = db.Column(db.String, nullable=False)

  owned_projects = relationship("Project", back_populates="owner")
  projects = relationship("Project",secondary=user_project_association,back_populates="users")

  def __repr__(self):
    return f'<User: {self.name} is a {self.role}'
  
class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  description = db.Column(db.String)
  start_date = db.Column(db.DateTime)
  end_date = db.Column(db.DateTime)
  owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  tasks = relationship("Task", back_populates="project")
  owner = relationship("User", back_populates="owned_projects")
  users = relationship("User",secondary=user_project_association,back_populates="projects")

  def __repr__(self):
    return f'<Project: {self.title} is due by {self.end_date}'
  
class Task(db.Model):
  __tablename__ = 'tasks'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)
  description = db.Column(db.String)
  priority = db.Column(db.String)
  due_date = db.Column(db.DateTime)
  project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

  project = relationship("Project", back_populates="tasks")

  def __repr__(self):
    return f'<Task: {self.name} is due by {self.due_date} and is of priority: {self.priority}'