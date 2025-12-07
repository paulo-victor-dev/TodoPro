import { useState } from 'react';
import { editTask, deleteTask } from '../../api/task.api';
import './Task.css';

export default function Task({ taskData, onChange }) {
    const {id, title, done} = taskData;

    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(title);
    const [isDone, setIsDone] = useState(done);

    async function handleEdit() {
        await editTask(id, {title: inputValue});
        setIsEditing(false);
        onChange();
    }

    async function handleDone() {
        const newDone = !isDone;
        await editTask(id, {title: title, done: newDone})
        setIsDone(newDone);
        onChange();
    }

    async function handleDelete() {
        await deleteTask(id);
        onChange();
    }

    return(
        <div className='task'>
            <input 
                className='task-checkbox'
                type="checkbox"
                checked={isDone}
                onChange={() => handleDone()}
            />
            
            {isEditing ? (
                <input
                    className='task-title-input' 
                    type="text" 
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
            ) : (
                <span className={isDone ? 'task-title-done': 'task-title'}>
                    {title}
                </span>
            )}
            
            <div className='task-actions'>
                {isEditing ? (
                    <button className='task-save-btn' title='Salvar' onClick={() => handleEdit()}>
                        <span className="task-icon-save material-icons">save</span>
                    </button>
                ) : (
                    <button className={isDone ? 'task-edit-btn-done' : 'task-edit-btn'} title='Editar' onClick={() => setIsEditing(true)}>
                        <span className="task-icon-edit material-icons">edit_document</span>
                    </button>
                )}

                <button className='task-delete-btn' title='Deletar' onClick={() => handleDelete()}>
                    <span className="task-icon-delete material-icons">delete</span>
                </button>
            </div>
        </div>
    );
}