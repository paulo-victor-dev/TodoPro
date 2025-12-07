import { useEffect, useState } from 'react';
import TaskAdd from '../TaskAdd';
import TaskFilter from '../TaskFilter';
import TaskList from '../TaskList';
import { getTasks } from '../../api/task.api';
import './Content.css';

export default function Content() {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    function loadTasks() {
        getTasks().then(data => {
            setTasks(data);
            setFilteredTasks(data);
        });
    }

    function handleFilter(filterText) {
        const result = tasks.filter(task => 
            task.title.toLowerCase().includes(filterText.toLowerCase())
        );
        setFilteredTasks(result);
    }

    useEffect(() => {
        loadTasks();
    }, [])

    return(
        <div className='content'>
            <h2 className='content-title'>
                Lista de Tarefas
            </h2>

            <div className='content-body'>
                <TaskAdd onChange={loadTasks}/>
                <TaskFilter 
                    onFilter={handleFilter}
                />
                <TaskList 
                    tasks={filteredTasks}
                    onChange={loadTasks}
                />
            </div>
        </div>
    );
}