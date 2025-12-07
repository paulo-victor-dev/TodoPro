import { useState } from 'react';
import { createTask } from "../../api/task.api";
import './TaskAdd.css';

export default function TaskAdd({ onChange }) {
    const [inputValue, setInputValue] = useState('');

    async function onSubmit(e) {
        e.preventDefault();
        await createTask({ title: inputValue });
        setInputValue('')
        onChange();
    }

    return(
        <form className='task-add-form' onSubmit={e => onSubmit(e)}>
            <input 
                className='task-add-input'
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Digite uma tarefa...'
            />

            <button className='task-add-btn' type="submit">Adicionar</button>
        </form>
    );
}