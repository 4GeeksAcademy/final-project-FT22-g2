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
    historialPassword = db.relationship("HistorialPassword", backref="user", uselist=False)

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

class HistorialPassword(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


# TABLAS DE PRODUCTOS Y CARRITO
