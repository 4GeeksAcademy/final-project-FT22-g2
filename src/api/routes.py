"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
<<<<<<< HEAD
from api.models import db, User 
=======
from api.models import db, User, Producto
>>>>>>> dffccd75b51971351598f2cab09836fcf7aae7c7
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS

api = Blueprint('api', __name__)
CORS(api, resources={r"/api/": {"origins": "https://didactic-happiness-7qx694qjp792xjqj-3001.app.github.dev/", "methods": ["GET", "POST", "PUT", "DELETE"]}})

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200
<<<<<<< HEAD
=======

# Rutas para la tabla User
@api.route('/users', methods=['GET', 'POST'])
def manage_users():
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.username for user in users])
    elif request.method == 'POST':
        data = request.json
        new_user = User(username=data['username'], email=data['email'], 
                        active=data['active'], password=generate_password_hash(data['password']))
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Usuario creado exitosamente'}), 201

@api.route('/users/<int:user_id>', methods=['GET', 'DELETE'])
def user_detail(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'GET':
        return jsonify({'username': user.username, 'email': user.email, 'active': user.active})
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'Usuario eliminado exitosamente'})

@api.route('/productos', methods=['GET'])
def get_all_products():
    productos = Producto.query.all()
    return jsonify([producto.serialize() for producto in productos])

>>>>>>> dffccd75b51971351598f2cab09836fcf7aae7c7
