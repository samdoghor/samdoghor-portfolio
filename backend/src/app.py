# imports
from flask import Flask, jsonify
from flask_migrate import Migrate

from models import db
import config

# configurations
app = Flask(__name__)
app.config['SECRET_KEY'] = config.SECRET_KEY

app.debug = config.DEBUG
app.config["SQLALCHEMY_DATABASE_URI"] = config.SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = config.SQLALCHEMY_TRACK_MODIFICATIONS

db.init_app(app)
db.app = app

migrate = Migrate(app, db)


# routes
@app.route('/')
def index():
    return jsonify({
        'Status Code': '200 Ok',
        'Message': 'App is running'
    }), 200


# run
if __name__ == "__main__":
    app.debug = config.DEBUG
    app.run()
