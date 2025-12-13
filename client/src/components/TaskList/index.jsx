import Task from '../Task';
import './TaskList.css';

export default function TaskList({ tasks, onChange }) {
    return(
        <div className='task-list'>
            {tasks.length ? (
                tasks.map(task => (
                    <Task 
                        key={task.id}
                        taskData={task}
                        onChange={onChange}
                    />))
            ) : (
                <p className='task-list-none'>Não há tarefas!</p>
            )}
        </div>
    );
}