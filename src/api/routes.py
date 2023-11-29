"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Producto
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

# Rutas para la tabla User
@api.route('/users', methods=['GET', 'POST'])
def manage_users():
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.username for user in users])
    elif request.method == 'POST':
        data = request.json
        hashed_password = generate_password_hash(data['password'])
        new_user = User(username=data['username'], email=data['email'], 
                        active=data['active'], password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Usuario creado exitosamente'}), 201

@api.route('/users/<int:user_id>', methods=['GET', 'PUT', 'DELETE'])
def user_detail(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'GET':
        return jsonify({'username': user.username, 'email': user.email, 'active': user.active})
    elif request.method == 'PUT':
        data = request.json
        user.username = data.get('username', user.username)
        user.email = data.get('email', user.email)
        user.active = data.get('active', user.active)
        user.password = data.get('password', user.password)
        db.session.commit()
        return jsonify({'message': 'Usuario actualizado exitosamente'})
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'Usuario eliminado exitosamente'})

@api.route('/productos', methods=['GET'])
def get_all_products():
    productos = Producto.query.all()
    return jsonify([producto.serialize() for producto in productos])

@api.route('/productos/<int:producto_id>', methods=['GET', 'PUT', 'DELETE'])
def producto_detail(producto_id):
    producto = Producto.query.get_or_404(producto_id)
    if request.method == 'GET':
        return jsonify(
            {
            "id": producto.id,
            "nombre": producto.nombre,
            "categoria": producto.categoria,
            "tipo": producto.tipo,
            "unitFormat": producto.unitFormat,
            "precio": producto.precio,
            "active": producto.active,
            "image": producto.image,
             }
             )

@api.route("/login", methods=["POST", "GET"])
def login():
    try:
        data = request.get_json()
        email = data.get("email", None)
        password = data.get("password", None)
    except Exception as e:
        return jsonify({"msg": "Invalid JSON format"}), 400

    if not email or not password:
        return jsonify({"msg": "Email and password are required"}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "User not found"}), 401

    if check_password_hash(user.password, password):
        access_token = create_access_token(identity={"email": user.email})
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"msg": "Invalid email or password"}), 401
    return  jsonify(data), 200