import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes style={{ color: "red", cursor: "pointer", backgroundColor: "rgba(255,0,0,0.1)", padding: "5px", width: "1.5em", height: "1.5em", borderRadius: "5px" }} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
