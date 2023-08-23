import Task from "./Task";

const ToDoList = ({ tasks, onDeleteTask }) => {
    return (
        <div className="wrapper">
            <ul className="menu">
                {tasks?.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
