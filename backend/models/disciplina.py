from app import db

class Disciplina(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    codigo = db.Column(db.String(10), unique=True, nullable=False)
    nome = db.Column(db.String(100), nullable=False)
    carga_horaria = db.Column(db.Integer, nullable=False)
    nivel = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'<Disciplina {self.nome}>'
