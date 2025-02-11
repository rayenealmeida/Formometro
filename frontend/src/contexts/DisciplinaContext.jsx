import React, { createContext, useState, useContext } from 'react';

const DisciplinaContext = createContext();

export const useDisciplina = () => {
    return useContext(DisciplinaContext);
};
export const DisciplinaProvider = ({ children }) => {
  const [disciplinas, setDisciplinas] = useState([]);

  const addDisciplina = (disciplina) => {
      setDisciplinas([...disciplinas, disciplina]);
  };

  return (
      <DisciplinaContext.Provider value={{ disciplinas, setDisciplinas, addDisciplina }}>
          {children}
      </DisciplinaContext.Provider>
  );
};

