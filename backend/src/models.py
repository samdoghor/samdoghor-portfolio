# imports

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

# configurations
db = SQLAlchemy()

# models


class Author(db.Model):
    """ This class defines the blog model """

    __tablename__ = "authors"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String())
    last_name = db.Column(db.String())

    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(
        db.DateTime, default=datetime.now(), onupdate=datetime.now())

    # relationships
    blog = db.relationship(
        'Blog', backref='authors', lazy=True)


class Blog(db.Model):
    """ This class defines the blog model """

    __tablename__ = "blogs"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    content = db.Column(db.String())

    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(
        db.DateTime, default=datetime.now(), onupdate=datetime.now())

    # foreign keys
    author_id = db.Column(db.Integer, db.ForeignKey(
        'authors.id'), nullable=False)
