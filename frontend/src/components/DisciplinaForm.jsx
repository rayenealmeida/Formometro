import React, { useState } from 'react';
import { useDisciplina } from '../contexts/DisciplinaContext';  // Ajuste a importação conforme necessário

const DisciplinaForm = () => {
  const { addDisciplina } = useDisciplina(); // Garantir que addDisciplina esteja vindo corretamente

  // Estado para armazenar os dados do formulário
  const [disciplina, setDisciplina] = useState({
    code: '',
    name: '',
    hours: '',
    type: '',
    nature: '',
  });

  // Função para lidar com a mudança de valor nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisciplina((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    addDisciplina(disciplina); // Certifique-se de que addDisciplina esteja disponível no contexto

    // Limpar os campos após envio
    setDisciplina({
      code: '',
      name: '',
      hours: '',
      type: '',
      nature: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Disciplina</h2>
      <div>
        <label>Componente Curricular</label>
        <input
          type="text"
          name="name"
          value={disciplina.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Código</label>
        <input
          type="text"
          name="code"
          value={disciplina.code}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Carga Horária</label>
        <input
          type="number"
          name="hours"
          value={disciplina.hours}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Tipo</label>
        <select name="type" value={disciplina.type} onChange={handleChange} required>
          <option value="Aula">Aula</option>
          <option value="Laboratório">Laboratório</option>
        </select>
      </div>
      <div>
        <label>Natureza</label>
        <select name="nature" value={disciplina.nature} onChange={handleChange} required>
          <option value="Obrigatório">Obrigatório</option>
          <option value="Eletivo">Eletivo</option>
        </select>
      </div>
      <button type="submit">Adicionar Disciplina</button>
    </form>
  );
};

export default DisciplinaForm;
