import React from 'react';
import { useDisciplina } from '../contexts/DisciplinaContext';

const DisciplinaLista = () => {
  const { disciplinas } = useDisciplina();  // Obtém disciplinas diretamente do contexto

  return (
    <div>
      <h2>Lista de Disciplinas</h2>
      <ul>
        {disciplinas.length === 0 ? (
          <p>Sem disciplinas cadastradas.</p>
        ) : (
          disciplinas.map((disciplina, index) => (
            <li key={index}>
              {disciplina.code} - {disciplina.name} - {disciplina.hours} horas
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DisciplinaLista;
