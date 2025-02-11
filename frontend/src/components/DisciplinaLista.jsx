import React from 'react';

const DisciplinaLista = ({ disciplinas}) => {
    return(
        <div>
            <h2>Lista de Disciplinas</h2>
            <ul>
                {disciplinas.map((disciplina, index) => (
                    <li key={index}>
                        {disciplina.code} - {disciplina.name} - {disciplina} horas
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DisciplinaLista;