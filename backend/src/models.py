"""
This module defines the Models for table creation for the app;
Tables are: Authors, Blogs, Tags
"""

# imports

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

# configurations
db = SQLAlchemy()

# models

blog_tags = db.Table(
    'blog_tags',
    db.Column('blog_id', db.Integer, db.ForeignKey(
        'blogs.id'), primary_key=True),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'), primary_key=True)
)


class Author(db.Model):
    """ This class defines the blog model """

    __tablename__ = "authors"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String())
    last_name = db.Column(db.String())

    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # relationships
    blog = db.relationship(
        'Blog', backref='authors', lazy=True)

    def __repr__(self):
        return f'Author(id={self.id}, first_name={self.first_name}, last_name={self.last_name})'  # noqa: E501


class Blog(db.Model):
    """ This class defines the blog model """

    __tablename__ = "blogs"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    content = db.Column(db.String())

    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    # foreign keys
    author_id = db.Column(db.Integer, db.ForeignKey(
        'authors.id'), nullable=False)

    # relationship with tags
    tags = db.relationship('Tag', secondary=blog_tags,
                           backref=db.backref('blogs', lazy='dynamic'))

    def __repr__(self):
        return f'Category(id={self.id}, title={self.title})'


class Tag(db.Model):
    """ This class defines the tag model """

    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25))

    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    def __repr__(self):
        return f'Category(id={self.id}, name={self.name})'
