"""
This module is for the app configuration
"""

# imports
import os

from dotenv import load_dotenv

# load env
load_dotenv()
DB_USERNAME = os.getenv('DB_USERNAME')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')

SECRET_KEY = os.getenv("SECRET_KEY")

# configurations
SQLALCHEMY_DATABASE_URI = f'postgresql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'  # noqa: E501
SQLALCHEMY_TRACK_MODIFICATIONS = False

DEBUG = True
