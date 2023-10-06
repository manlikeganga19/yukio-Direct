from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash

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
  username = db.Column(db.String, nullable=False)
  email_address = db.Column(db.String)
  role = db.Column(db.String)
  password = db.Column(db.String, nullable=False)

  projects = db.relationship("Project",secondary=user_project_association,back_populates="users")

  def set_password(self, password):
        self.password= generate_password_hash(password)

  def check_password(self, password):
        return check_password_hash(self.password, password)
  
  def to_dict(self):
     return{
        'id': self.id,
        'username': self.username,
        'password': self.password,
        'email_address': self.email_address,
        'projects':[project.to_dict() for project in self.projects]
     }

  def __repr__(self):
    return f'<User: {self.username} is a {self.role}>'
  
class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  description = db.Column(db.String)
  start_date = db.Column(db.DateTime, server_default=db.func.now())
  end_date = db.Column(db.DateTime, onupdate=db.func.now())
  owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  tasks = db.relationship("Task", back_populates="project")
  users = db.relationship("User",secondary=user_project_association,back_populates="projects")

  def to_dict(self):
     return{
        'id': self.id,
        'title': self.title,
        'description': self.description,
        'start_date': self.start_date,
        'end_date': self.end_date if hasattr(self, 'end_date') else None,
        'tasks':[task.to_dict() for task in self.tasks],
        'owner_id':self.owner_id,
     }

  def __repr__(self):
    return f'<Project: {self.title} is due by {self.end_date}>'
  
class Task(db.Model):
  __tablename__ = 'tasks'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String)
  description = db.Column(db.String)
  priority = db.Column(db.String)
  due_date = db.Column(db.DateTime, onupdate=db.func.now())
  project_id = db.Column(db.Integer, db.ForeignKey('projects.id'))

  project = db.relationship("Project", back_populates="tasks")

  def to_dict(self):
     return{
        'id': self.id,
        'name': self.name,
        'description': self.description,
        'due_date': self.due_date,
        'project':[project.to_dict() for project in self.project],
     }


  def __repr__(self):
    return f'<Task: {self.name} is due by {self.due_date} and is of priority: {self.priority}'