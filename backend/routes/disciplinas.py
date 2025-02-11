from flask import Blueprint, jsonify
from models.disciplina import Disciplina

disciplinas_bp = Blueprint('disciplinas', __name__)

@disciplinas_bp.route('/disciplinas', methods=['GET'])
def get_disciplinas():
    disciplinas = Disciplina.query.all()
    return jsonify([{'id': d.id, 'codigo': d.codigo, 'nome': d.nome, 'carga_horaria': d.carga_horaria, 'nivel': d.nivel} for d in disciplinas])
