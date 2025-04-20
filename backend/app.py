from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
#Environment variables 
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env

app = Flask(__name__)
CORS(app)



app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

#initiate database instance
db = SQLAlchemy(app)

#import all routes
import routes

#creating all the relations in app_context()
with app.app_context():
    db.create_all()

if __name__=="__main__":
    app.run(debug=True)