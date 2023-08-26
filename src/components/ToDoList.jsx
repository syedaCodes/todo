import { useState } from "react";
import Task from "./Task";

const ToDoList = ({ tasks, onDeleteTask, onToggleTask, onClearList }) => {
    const [sortBy, setSortBy] = useState("default");

    let sortedTasks;
    const priorityOrder = { high: 1, medium: 2, low: 3 };

    if (sortBy === "default") sortedTasks = tasks;

    if (sortBy === "description")
        sortedTasks = tasks
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "priority")
        sortedTasks = tasks
            .slice()
            .sort(
                (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
            );

    if (sortBy === "status")
        sortedTasks = tasks.slice().sort((a, b) => a.taskStatus - b.taskStatus);

    return (
        <div className="wrapper">
            <ul className="menu">
                {sortedTasks?.map((task) => (
                    <Task
                        task={task}
                        onDeleteTask={onDeleteTask}
                        onToggleTask={onToggleTask}
                        key={task.id}
                    />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="default">Default</option>
                    <option value="description">Sort by description</option>
                    <option value="priority">Sort by priority</option>
                    <option value="status">Sort by status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
};

export default ToDoList;
