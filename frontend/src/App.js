import React from 'react';
import DisciplinaForm from './components/DisciplinaForm';
import DisciplinaLista from './components/DisciplinaLista';
import { DisciplinaProvider } from './contexts/DisciplinaContext';  // Corrigido

const App = () => {
  return (
    <DisciplinaProvider>
      <div>
        <DisciplinaForm />
        <DisciplinaLista />
      </div>
    </DisciplinaProvider>
  );
};

export default App;
