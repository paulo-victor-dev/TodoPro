import { useEffect, useState } from 'react';

import Task from '../Task';
import './TaskList.css';

export default function TaskList({ tasks, onChange }) {
    return(
        <div className='task-list'>
            {tasks.map(task => (
                <Task 
                    key={task.id}
                    taskData={task}
                    onChange={onChange}
                />
            ))}
        </div>
    );
}