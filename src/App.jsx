import { useState } from "react";
import Header from "./components/header";
import Form from "./components/Form";
import ToDoList from "./components/toDoList";
import Footer from "./components/Footer";

function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTasks = (task) => {
        setTasks((tasks) => [...tasks, task]);
    };

    const handleDeleteTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    };

    const handleToggleTask = (id) => {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id
                    ? { ...task, taskStatus: !task.taskStatus }
                    : task
            )
        );
    };

    const handleClearList = () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirmed) setTasks([]);
    };

    return (
        <>
            <Header />
            <Form onAddTasks={handleAddTasks} />
            <ToDoList
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onToggleTask={handleToggleTask}
                onClearList={handleClearList}
            />
            <Footer tasks={tasks} />
        </>
    );
}

export default App;
