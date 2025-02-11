import React, { createContext, useContext, useState } from 'react';

const DisciplinaContext = createContext();

export const useDisciplina = () => {
  return useContext(DisciplinaContext);
};

export const DisciplinaProvider = ({ children }) => {
  const [disciplinas, setDisciplinas] = useState([]);

  const addDisciplina = (disciplina) => {
    setDisciplinas((prevDisciplinas) => [...prevDisciplinas, disciplina]);
  };

  return (
    <DisciplinaContext.Provider value={{ disciplinas, addDisciplina }}>
      {children}
    </DisciplinaContext.Provider>
  );
};
