from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Formômetro API está rodando!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)