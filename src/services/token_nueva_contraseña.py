from flask import Flask, request, jsonify
from itsdangerous import URLSafeTimedSerializer

serializer = URLSafeTimedSerializer('your_secret_key')

# Genera un token seguro para un correo electrónico dado
def generate_reset_token(email):
    return serializer.dumps(email, salt='reset-salt')

# Verifica y obtiene el correo electrónico desde un token
def verify_reset_token(token, expiration=3600):  # 1 hour expiration
    try:
        email = serializer.loads(token, salt='reset-salt', max_age=expiration)
        return email
    except:
        return None
