from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import DateTime, CheckConstraint

db = SQLAlchemy()

# TABLAS DE USUARIO
class User(db.Model):
    __tablename__ = "users"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    lastName = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    # Conexiones
    userLogin = db.relationship("UserLogin", backref="user", uselist=False)
    historialLogin = db.relationship("HistorialLogin", backref="user", uselist=True)
    carrito = db.relationship("Carrito", backref="user", uselist=False)
    favoritos = db.relationship("Favoritos", backref="user", uselist=True)
    historialCompra = db.relationship("HistorialCompra", backref="user", uselist=True)

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

    def serialize_with_userLogin(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "lastName": self.lastName,
            "userLogin": self.userLogin.serialize()
        }

    def serialize_with_historialLogin(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "lastName": self.lastName,
            "historialLogin": self.historialLogin.serialize()
        }

    def serialize_with_carrito(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "lastName": self.lastName,
            "carrito": self.carrito.serialize()
        }

    def serialize_with_favoritos(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "lastName": self.lastName,
            "favoritos": self.favoritos.serialize()
        }

    def serialize_with_historialCompra(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "lastName": self.lastName,
            "historialCompra": self.historialCompra.serialize()
        }

class UserLogin(db.Model):
    __tablename__ = "userLogin"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    
    # Conexiones
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def repr(self):
        return f'<UserLogin {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email
        }

class HistorialLogin(db.Model):
    __tablename__ = "historialLogin"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    login_successful = db.Column(db.Boolean(), unique=True, nullable=False)
    fecha_login = db.Column(DateTime(), unique=False, nullable=False)

    # Conexiones
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def repr(self):
        return f'<HistorialLogin {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "fecha_login": self.fecha_login,
            "login_successful": self.login_successful
        }

class Favoritos(db.Model):
    __tablename__ = "favoritos"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    producto = db.relationship("Producto", backref="favoritos", uselist=True)

    # Conexiones
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def repr(self):
        return f'<Favoritos {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
        }

    def serialize_with_producto(self):
        return {
            "id": self.id,
            "producto": self.producto.serialize()
        }

# TABLAS DE PRODUCTOS Y CARRITO
class Carrito(db.Model):
    __tablename__ = "carrito"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, unique=False, nullable=True)
    producto = db.relationship("Producto", backref="carrito", uselist=True)
    factura = db.relationship("Factura", backref="carrito", uselist=True)

    # Conexiones
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    def repr(self):
        return f'<Carrito {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "cantidad": self.cantidad,
            "precio": self.precio,
        }

    def serialize_with_producto(self):
        return {
            "id": self.id,
            "cantidad": self.cantidad,
            "precio": self.precio,
            "producto": self.producto.serialize()
        }
    
    def serialize_with_factura(self):
        return {
            "id": self.id,
            "cantidad": self.cantidad,
            "precio": self.precio,
            "factura": self.factura.serialize()
        }

class Producto(db.Model):
    __tablename__ = 'producto'
    # Información de columnas
    id = db.Column (db.Integer, primary_key=True)
    nombre = db.Column (db.String(200), unique=False, nullable = False) 
    originalPrice = db.Column(db.Integer, unique=False, nullable= False)       
    discountedPrice = db.Column(db.Integer, unique=False, nullable= True) 
    rating = db.Column (db.Integer, CheckConstraint('rating >= 1 AND rating <= 5'), unique=False, nullable=True)
    unitFormat = db.Column (db.String(200), unique=False, nullable=False)     
    tipo = db.Column (db.String(200), unique=False, nullable=False)
    categoria = db.Column(db.String(200), unique=False, nullable=True)

    # Conexiones
    carrito_id = db.Column(db.Integer, db.ForeignKey('carrito.id'), nullable=True)
    favoritos_id = db.Column(db.Integer, db.ForeignKey('favoritos.id'), nullable=True)
    detalle_id = db.Column(db.Integer, db.ForeignKey('detalle.id'), nullable=True)

    def __repr__(self):
        return f'<Producto {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "originalPrice": self.originalPrice,
            "discountedPrice": self.discountedPrice,
            "rating": self.rating,
            "formato": self.unitFormat,
            "tipo": self.tipo,
            "categoria": self.categoria
        }


class Factura(db.Model):
    __tablename__ = "factura"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, unique=False, nullable=False)
    precio_total = db.Column(db.Integer, unique=False, nullable=False)
    fecha_compra = db.Column(DateTime(), unique=False, nullable=False)
    estado_compra = db.Column(db.Boolean(), unique=False, nullable=False)

    # Conexiones
    detalle = db.relationship("Detalle", backref="factura", uselist=True)
    carrito_id = db.Column(db.Integer, db.ForeignKey('carrito.id'), nullable=False)

    def repr(self):
        return f'<Factura {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "cantidad": self.cantidad,
            "precio_total": self.precio_total,
            "fecha_compra": self.fecha_compra,
            "estado_compra": self.estado_compra
        }

    def serialize_with_detalle(self):
        return {
            "id": self.id,
            "cantidad": self.cantidad,
            "precio_total": self.precio_total,
            "fecha_compra": self.fecha_compra,
            "estado_compra": self.estado_compra,
            "detalle": self.detalle.serialize()
        }


class Detalle(db.Model):
    __tablename__ = "detalle"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)

    # Conexiones
    factura_id = db.Column(db.Integer, db.ForeignKey('factura.id'), nullable=False)
    historialCompra_id = db.Column(db.Integer, db.ForeignKey('historialCompra.id'), nullable=True)
    producto = db.relationship("Producto", backref="detalle", uselist=True)
    
    def repr(self):
        return f'<Detalle {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "precio_producto": self.precio_producto,
            "unitFormat": self.unitFormat
        }
    
    def serialize_with_producto(self):
        return {
            "id": self.id,
            "rating": self.rating,
            "precio_producto": self.precio_producto,
            "unitFormat": self.unitFormat,
            "producto": self.producto.serialize()
        }


class HistorialCompra(db.Model):
    __tablename__ = 'historialCompra'
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)

    # Conexiones
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    detalle = db.relationship("Detalle", backref="historialCompra", uselist=True)
                       
    def __repr__(self):
        return f'<HistorialCompra {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
        }

    
    def serialize_with_detalle(self):
        return {
            "id": self.id,
            "user_id": self.users_id,
            "detalle": self.detalle.serialize()
        }
