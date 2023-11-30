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

# Rutas para la tabla User
@api.route('/users', methods=['GET', 'POST'])
def manage_users():
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.username for user in users])
    elif request.method == 'POST':
        data = request.json
        user = User(username=data['username'], email=data['email'], 
                        active=data['active'], password=generate_password_hash(data['password']))
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'Usuario creado exitosamente'}), 201

@api.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        users = User.query.all()
        return jsonify([user.username for user in users])
    elif request.method == 'POST':
        data = request.json
        print(data)
        email = data.get('email')
        password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400
    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': 'Invalid email or password'}), 401
    
    token = create_access_token(identity={'email': user.email})
    return jsonify({'token': token, 'message': 'Login successful'}), 200

# RUTA LISTA
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

# RUTA LISTA
@api.route('/productos', methods=['GET'])
def get_all_products():
    productos = Producto.query.all()
    return jsonify([producto.serialize() for producto in productos])

# RUTA LISTA
@api.route('/users/<int:user_id>', methods=['GET', 'DELETE'])
def user_detail(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'GET':
        return jsonify({'username': user.username, 'email': user.email, 'active': user.active})
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'Usuario eliminado exitosamente'})