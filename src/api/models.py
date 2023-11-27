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
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

class Favoritos(db.Model):
    __tablename__ = "favorito"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    # Conexiones
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    producto_id = db.Column(db.Integer, db.ForeignKey("producto.id"), nullable=False)

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
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    orden_id = db.Column(db.Integer, db.ForeignKey("orden.id"), nullable=False)

class Orden(db.Model):
    __tablename__ = 'ordenes'
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.DateTime(), nullable=False)
    total = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(120), nullable=False)
    # Conexiones
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

class Producto(db.Model):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    categoria = db.Column(db.String(120))
    tipo = db.Column(db.String(120), nullable=False)
    unitFormat = db.Column(db.String(120), nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    active = db.Column(db.Boolean(), nullable=False)
    # Conexiones

class OrdenProducto(db.Model):
    __tablename__ = 'ordenes_productos'
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    # Conexiones
    orden_id = db.Column(db.Integer, db.ForeignKey("orden.id"), nullable=False)
    producto_id = db.Column(db.Integer, db.ForeignKey("producto.id"), nullable=False)

class FacturaProducto(db.Model):
    __tablename__ = 'facturas_productos'
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    # Conexiones
    factura_id = db.Column(db.Integer, db.ForeignKey("factura.id"), nullable=False)
    producto_id = db.Column(db.Integer, db.ForeignKey("producto.id"), nullable=False)
