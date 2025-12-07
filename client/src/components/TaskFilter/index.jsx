import { useState } from 'react';
import './TaskFilter.css';

export default function TaskFilter({ onFilter, onChange }) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        const value = e.target.value;
        setInputValue(value);
        onFilter(value);
    }
    
    return(
        <div className='task-filter'>
            <span className="task-filter-icon material-icons">search</span>
            
            <input 
                className='task-filter-input'
                type="search"
                value={inputValue}
                onChange={handleChange}
                placeholder='Pesquisar tarefa...' 
            />
        </div>
    );
}