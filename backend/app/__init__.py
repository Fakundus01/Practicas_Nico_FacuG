from flask import Flask

from config import Config
from .api import api_blueprint
from .extensions import db, migrate
from .models import Contact


def create_app() -> Flask:
  app = Flask(__name__)
  app.config.from_object(Config)

  db.init_app(app)
  migrate.init_app(app, db)
  app.register_blueprint(api_blueprint, url_prefix='/api')

  return app
