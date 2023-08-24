import Task from "./Task";

const ToDoList = ({ tasks, onDeleteTask, onToggleTask }) => {
    return (
        <div className="wrapper">
            <ul className="menu">
                {tasks?.map((task) => (
                    <Task
                        task={task}
                        onDeleteTask={onDeleteTask}
                        onToggleTask={onToggleTask}
                        key={task.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
