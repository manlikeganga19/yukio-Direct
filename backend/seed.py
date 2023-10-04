from app import app
from models import db, User, Project, Task


if __name__ == '__main__':
    with app.app_context():
        make_test()