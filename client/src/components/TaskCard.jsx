import '../styles/TaskCard.css';

function TaskCard({ key, title, description, done }) {
    return (
        <div className="task-card" key={key}>


            <p>{title}</p>
            <p>{description}</p>
            <p>{done ? 'Concluída' : 'Pendente'}</p>
        </div>
    )
}

export default TaskCard;