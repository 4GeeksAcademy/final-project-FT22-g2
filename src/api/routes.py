"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/login', methods=['POST', 'GET'])
def login():
    body = request.get_json()
    email = body["email"]
    password = body["password"]

    user = User.query.filter_by(email=email, password=password).first()
    if user == None:
        return jsonify({"msg": "El usario y/o la contraseña no son correctos"}), 401

    access_token = create_access_token(identity=user.serialize(), additional_claims={"username": user.username, "user_id": user.id, "email": user.email})
    response_body = {
        "msg": "Token creada correctamente",
        "token": access_token,
        "email": email,
        "username": user.username, 
    }
    
    return jsonify(response_body), 200