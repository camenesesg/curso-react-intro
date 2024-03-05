import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext);
    return(

        total !== completed ?
        <h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
        </h1>
        :
        <h1 className='TodoCounter'>Felicidades, completaste todas las tareas</h1>
    );
}

export { TodoCounter };