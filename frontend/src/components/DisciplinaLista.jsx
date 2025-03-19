import React from 'react';
import { useDisciplina } from '../contexts/DisciplinaContext';

const DisciplinaLista = () => {
  const { disciplinas } = useDisciplina();  // Obtém disciplinas diretamente do contexto

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Disciplinas</h2>
      
      {disciplinas.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          Sem disciplinas cadastradas.
        </div>
      ) : (
        <ul className="list-group">
          {disciplinas.map((disciplina, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{disciplina.code}</strong> - {disciplina.name}
              </div>
              <span className="badge bg-primary rounded-pill">{disciplina.hours} horas</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisciplinaLista;
