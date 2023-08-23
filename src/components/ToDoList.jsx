import Item from "./item";

const ToDoList = ({ tasks, onDeleteTask }) => {
    return (
        <div className="wrapper">
            <ul className="menu">
                {tasks?.map((e) => (
                    <Item key={e.id} task={e} onDeleteTask={onDeleteTask} />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
