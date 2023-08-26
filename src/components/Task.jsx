const Task = ({ task, onDeleteTask, onToggleTask }) => {
    const icons = new Map([
        ["high", `\u{1F534}`],
        ["medium", `\u{1F7E1}`],
        ["low", `\u{1F7E2}`],
    ]);

    return (
        <li>
            <input
                type="checkbox"
                id={task.description}
                checked={task.taskStatus}
                onChange={() => onToggleTask(task.id)}
            />
            <label htmlFor={task.description}>
                <span className={task.taskStatus ? "task-completed" : ""}>
                    {task.description}
                </span>
            </label>
            <span title="priority">{icons.get(task.priority)}</span>
            <button onClick={() => onDeleteTask(task.id)}>❌</button>
        </li>
    );
};

export default Task;
