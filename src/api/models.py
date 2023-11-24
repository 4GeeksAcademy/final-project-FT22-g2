from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# TABLAS DE USUARIO
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastName = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    userLogin = db.relationship("UserLogin", backref="user", uselist=False)
    historialLogin = db.relationship("HistorialLogin", backref="user", uselist=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastName": self.lastName
            # do not serialize the password, its a security breach
        }

class UserLogin(db.Model):
    __tablename__ = "UserLogin"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


class HistorialLogin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

class Carrito(db.Model):
    __tablename__ = 'Carrito'

    id = db.Column(db.Integer, primary_key=True)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    producto_id = db.Column(db.Integer, db.ForeignKey('Producto.id'), nullable=False)
    cantidad = db.Column(db.Integer, unique=False, nullable=False)
    precio = db.Column(db.Integer, db.ForeignKey('Producto.id'), unique=False, nullable=False)   

    def __repr__(self):
        return f'<Carrito {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "cantidad": self.cantidad,
            "precio": self.precio,
        }
class Producto(db.Model):
    __tablename__ = 'Producto'

    id = db.Column (db.Integer, primary_key=True)
    nombre = db.Column (db.String(200), unique=False, nullable = False) 
    precio = db.Column(db.Integer, unique=False, nullable=False)       

    def __repr__(self):
        return f'<Producto {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "precio": self.precio,
        }