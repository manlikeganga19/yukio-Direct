from app import app
from models import db, User, Project, Task
from datetime import datetime 

def make_test():
    with app.app_context():
        db.create_all()  # Create database tables if they don't exist

        # Clear existing data
        User.query.delete()
        Project.query.delete()
        Task.query.delete()

        # Create and add sample users
        user1 = User(name='Amoon', email_address='amoon@gmail.com', role='admin', password='yukiosrandoms')
        user2 = User(name='Ampacti', email_address='ampacti@gmail.com', role='user', password='ampacisrandoms')
        user3 = User(name='Rin', email_address='rin@gmail.com', role='user', password='rinsrandoms')
        db.session.add(user1)
        db.session.add(user2)
        db.session.add(user3)

        # Create and add sample projects
        project1 = Project(title='Bank Website', description='Buy money')
        project2 = Project(title='Another Project', description='Some other description')
        db.session.add(project1)
        db.session.add(project2)

        # Create and add sample tasks with datetime objects
        task1 = Task(name='Task 1', description='Description 1', priority='High', due_date=datetime(2023, 12, 31), project=project1)
        task2 = Task(name='Task 2', description='Description 2', priority='Medium', due_date=datetime(2023, 11, 30), project=project1)
        task3 = Task(name='Task 3', description='Description 3', priority='Low', due_date=datetime(2023, 10, 31), project=project2)
        db.session.add(task1)
        db.session.add(task2)
        db.session.add(task3)

        db.session.commit()

if __name__ == '__main__':
    make_test()
