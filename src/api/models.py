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
    active = db.Column(db.Boolean(), nullable=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    last_login = db.Column(db.DateTime())
    # Conexiones
    profile = db.relationship("Profile", backref="user", uselist=False)
    favoritos = db.relationship("Favorito", backref="user")
    facturas = db.relationship("Factura", backref="user")
    ordenes = db.relationship("Orden", backref="user")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "active": self.active,
            "last_login": self.last_login,
        }

    def serialize_with_profile(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "active": self.active,
            "last_login": self.last_login,
            "profile": self.profile.serialize()
        }

    def serialize_with_favoritos(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "active": self.active,
            "last_login": self.last_login,
            "favoritos": self.favoritos.serialize()
        }

    def serialize_with_facturas(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "active": self.active,
            "last_login": self.last_login,
            "facturas": self.facturas.serialize()
        }

    def serialize_with_ordenes(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "active": self.active,
            "last_login": self.last_login,
            "ordenes": self.ordenes.serialize()
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Profile(db.Model):
    __tablename__ = "profiles"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    avatar = db.Column(db.String(120), nullable=False)
    # Conexiones
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "avatar": self.avatar,
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Favorito(db.Model):
    __tablename__ = "favoritos"
    # Información de columnas
    id = db.Column(db.Integer, primary_key=True)
    # Conexiones
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    producto_id = db.Column(db.Integer, db.ForeignKey("productos.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

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
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    orden_id = db.Column(db.Integer, db.ForeignKey("ordenes.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "numero_factura": self.numero_factura,
            "date": self.date,
            "total": self.total,
            "status": self.status,
            "ref": self.ref,
            "date_payed": self.date_payed,
            "type_payment": self.type_payment,
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Orden(db.Model):
    __tablename__ = 'ordenes'
    id = db.Column(db.Integer, primary_key=True)
    fecha = db.Column(db.DateTime(), nullable=False)
    total = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(120), nullable=False)
    # Conexiones
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    factura = db.relationship("Factura", backref="orden", uselist=False)

    def serialize(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "total": self.total,
            "status": self.status,
        }

    def serialize_with_factura(self):
        return {
            "id": self.id,
            "fecha": self.fecha,
            "total": self.total,
            "status": self.status,
            "factura": self.factura
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Producto(db.Model):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    categoria = db.Column(db.String(120))
    tipo = db.Column(db.String(120), nullable=False)
    unitFormat = db.Column(db.String(120), nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    active = db.Column(db.Boolean(), nullable=False)
    image = db.Column(db.String(200), nullable=False)
    # Conexiones
    favoritos = db.relationship("Favorito", backref="producto")
    ordenesProductos = db.relationship("OrdenProducto", backref="producto")
    facturasProductos = db.relationship("FacturaProducto", backref="producto")

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "categoria": self.categoria,
            "tipo": self.tipo,
            "unitFormat": self.unitFormat,
            "precio": self.precio,
            "active": self.active,
            "image": self.image,
        }

    def serialize_with_favoritos(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "categoria": self.categoria,
            "tipo": self.tipo,
            "unitFormat": self.unitFormat,
            "precio": self.precio,
            "active": self.active,
            "image": self.image,
            "favoritos": self.favoritos.serialize()
        }

    def serialize_with_ordenesProductos(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "categoria": self.categoria,
            "tipo": self.tipo,
            "unitFormat": self.unitFormat,
            "precio": self.precio,
            "active": self.active,
            "image": self.image,
            "ordenesProductos": self.ordenesProductos.serialize()
        }

    def serialize_with_facturasProductos(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "categoria": self.categoria,
            "tipo": self.tipo,
            "unitFormat": self.unitFormat,
            "precio": self.precio,
            "active": self.active,
            "image": self.image,
            "facturasProductos": self.facturasProductos.serialize()
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class OrdenProducto(db.Model):
    __tablename__ = 'ordenes_productos'
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    # Conexiones
    orden_id = db.Column(db.Integer, db.ForeignKey("ordenes.id"), nullable=False)
    producto_id = db.Column(db.Integer, db.ForeignKey("productos.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "cantidad": self.nombre,
            "precio": self.categoria,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class FacturaProducto(db.Model):
    __tablename__ = 'facturas_productos'
    id = db.Column(db.Integer, primary_key=True)
    cantidad = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    # Conexiones
    factura_id = db.Column(db.Integer, db.ForeignKey("facturas.id"), nullable=False)
    producto_id = db.Column(db.Integer, db.ForeignKey("productos.id"), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "cantidad": self.nombre,
            "precio": self.categoria,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()