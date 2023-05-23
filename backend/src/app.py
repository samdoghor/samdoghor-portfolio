"""
Samuel Doghor Portfolio Backend
"""

# imports

from flask import Flask, jsonify
from flask_migrate import Migrate
from flask_cors import CORS

from models import db, Project
import config

# configurations

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
app.config['SECRET_KEY'] = config.SECRET_KEY

app.debug = config.DEBUG
app.config["SQLALCHEMY_DATABASE_URI"] = config.SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = config.SQLALCHEMY_TRACK_MODIFICATIONS  # noqa: E501

db.init_app(app)
db.app = app

migrate = Migrate(app, db)


# routes

@app.route('/')
def index():
    """ This function confirms app is running """
    return jsonify({
        'Status Code': '200 Ok',
        'Message': 'App is running'
    }), 200


@app.route("/projects-create",  methods=['POST'])
def project_create(title, github, website, description, image, featured):
    """ This function is use to create project """

    projects = Project(title=title, github=github, website=website,
                       description=description, image=image, featured=featured)
    db.session.add(projects)
    db.session.commit()

    return jsonify({
        "Message": "Projects Created Successfully"
    }), 200


@app.route("/projects",  methods=['GET'])
def project_view():
    """ This function is use to view all projects """
    projects = Project.query.filter_by(featured=True).all()

    project = []

    for proj in projects:
        project.append({
            "Title": proj.title,
            "GitHub": proj.github,
            "Website": proj.website,
            "Description": proj.description,
            "Image": proj.image,
            "Featured": proj.featured
        })

    return jsonify({"Projects": project}), 200


# run

if __name__ == "__main__":
    app.debug = config.DEBUG
    app.run()
