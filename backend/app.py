from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
import os
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configurações do banco de dados
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Instanciando o db aqui
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Importando os modelos após a criação do db
from models.usuario import Usuario

@app.route('/')
def home():
    return jsonify({"message": "Formômetro API está rodando!"})

@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    usuarios = Usuario.query.all()
    return jsonify([usuario.nome for usuario in usuarios])

if __name__ == '__main__':
    app.run(debug=True, port=5000)
