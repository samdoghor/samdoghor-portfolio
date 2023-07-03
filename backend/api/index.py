"""
Samuel Doghor Portfolio Backend
"""

# imports

from flask import Flask, jsonify
from flask_caching import Cache
from flask_compress import Compress
from flask_cors import CORS
from flask_migrate import Migrate

import config
import models

# configurations

cache = Cache()

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "https://app.samdoghor.com", "https://www.app.samdoghor.com", "app.samdoghor.com", "www.app.samdoghor.com"]}})  # noqa: E501

Config = config.Config
db = models.db
Project = models.Project
Blog = models.Blog

app.config['SECRET_KEY'] = Config.SECRET_KEY

app.debug = Config.DEBUG
app.config["SQLALCHEMY_DATABASE_URI"] = Config.SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = Config.SQLALCHEMY_TRACK_MODIFICATIONS  # noqa: E501

db.init_app(app)
db.app = app

migrate = Migrate(app, db)

Compress(app)
# Cache expiration time set to 1 week
cache.init_app(app, config={'CACHE_TYPE': 'simple',
               'CACHE_DEFAULT_TIMEOUT': 604800})


# routes

@app.route('/')
def index():
    """ This function confirms app is running """
    return jsonify({
        'Status Code': '200 Ok',
        'Message': 'App is running'
    }), 200


@app.route("/projects-create",  methods=['POST'])
@cache.cached()
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
@cache.cached()
def project_view():
    """ This function is use to view all projects """
    projects = Project.query.filter_by(
        featured=True).order_by(Project.id.asc()).all()

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


@app.route("/blogs",  methods=['GET'])
@cache.cached()
def blog_view():
    """ This function is use to view all blogs """
    blogs = Blog.query.filter_by(featured=True).order_by(
        Blog.created_at.desc()).all()

    blog = []

    for blo in blogs:
        blog.append({
            "Title": blo.title,
            "Short Content": blo.short_content,
            "Content": blo.content,
            "Author": blo.authors.last_name + " " + blo.authors.first_name,
        })

    return jsonify({"Blogs": blog}), 200

# Error handler for all exceptions


@app.errorhandler(Exception)
def handle_exception(error):
    """ Handles all errors """

    # Return a JSON response with an error message
    response = {
        "message": "An error occurred",
        "error": str(error)
    }
    return jsonify(response), 500

# run


if __name__ == "__main__":
    app.debug = Config.DEBUG
    app.run()
