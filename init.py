from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from app import db


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'yuk10sranDoms20'

    from .auth import auth
    from app import User

    app.register_blueprint(auth, url_prefix='/')

    with app.app_context():
        db.create_all()

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app


