from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import DateTime

db = SQLAlchemy()

# TABLAS DE USUARIO
class User(db.Model):
    __tablename__ = "users"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    active = db.Column(db.Boolean(), nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    last_login = db.Column(db.DateTime(), nullable=False)
    # Conexiones

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "lastName": self.lastName
            # do not serialize the password, its a security breach
        }

class Profile(db.Model):
    __tablename__ = "profiles"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    biografia = db.Column(db.String(120), unique=False, nullable=False)
    twitter = db.Column(db.String(120), unique=True, nullable=False)
    facebook = db.Column(db.String(120), unique=True, nullable=False)
    instagram = db.Column(db.String(120), unique=False, nullable=False)
    avatar = db.Column(db.String(120), unique=False, nullable=False)
    # Conexiones

class Factura(db.Model):
    __tablename__ = "facturas"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    numero_factura = db.Column(db.Integer, unique=True, nullable=False)
    date = db.Column(db.DateTime(), nullable=False)
    total = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(120), nullable=False)
    ref = db.Column(db.String(120), nullable=False)
    date_payed = db.Column(db.DateTime(), nullable=False)
    type_payment = db.Column(db.String(120), nullable=False)
    # Conexiones


class Orden(db.Model):
    __tablename__ = 'ordenes'
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.DateTime(), nullable=False)
    total = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(120), nullable=False)
    # Conexiones

class Producto(db.Model):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(120), nullable=False)
    categoria = db.Column(db.String(120))
    tipo = db.Column(db.String(120), nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    active = db.Column(db.Boolean(), nullable=False)
    # Conexiones

class OrdenProducto(db.Model):
    __tablename__ = 'ordenes_productos'
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    # Conexiones

class FacturaProducto(db.Model):
    __tablename__ = 'facturas_productos'
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    # Conexiones