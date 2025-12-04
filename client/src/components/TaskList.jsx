import { useState, useEffect } from "react";
import api from '../api/api'
import TaskCard from "./TaskCard";
import '../styles/TaskList.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        api.get('task/')
            .then(response => setTasks(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    done={task.done}
                />
            ))}
        </div>
    )
}

export default TaskList;