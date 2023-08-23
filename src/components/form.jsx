import { useState } from "react";

const Form = ({ onAddTasks }) => {
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description) return;

        const addTask = {
            description,
            priority,
            taskStatus: false,
            id: Date.now(),
        };

        onAddTasks(addTask);
        console.log(addTask);

        setDescription("");
        setPriority("medium");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-wrapper">
                <h3>What`s on the list, 😎 to do?</h3>
                <div className="form-box">
                    <input
                        type="text"
                        placeholder="Ready, set, go..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value={"high"}>High</option>
                        <option value={"medium"}>Medium</option>
                        <option value={"low"}>Low</option>
                    </select>
                    <button>Add</button>
                </div>
            </div>
        </form>
    );
};

export default Form;
