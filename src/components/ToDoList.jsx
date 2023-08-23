import Item from "./item";

const initialState = [
    {
        id: 1,
        description: "Code",
        priority: "high",
        taskStatus: true,
    },
    {
        id: 2,
        description: "Read",
        priority: "medium",
        taskStatus: false,
    },
];

const ToDoList = () => {
    return (
        <div className="wrapper">
            <ul className="menu">
                {initialState?.map((e) => (
                    <Item
                        key={e.id}
                        description={e.description}
                        priority={e.priority}
                        taskStatus={e.taskStatus}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
