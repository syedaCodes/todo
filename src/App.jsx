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

    return (
        <>
            <Header />
            <Form onAddTasks={handleAddTasks} />
            <ToDoList tasks={tasks} onDeleteTask={handleDeleteTask} />
            <Footer />
        </>
    );
}

export default App;
