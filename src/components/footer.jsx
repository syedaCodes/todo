const Footer = ({ tasks }) => {
    if (!tasks.length)
        return (
            <footer>
                <em>
                    Start adding some tasks to your to do list, you got this 🚀
                </em>
            </footer>
        );

    const numTasks = tasks.length;
    const tasksCompleted = tasks.filter((task) => task.taskStatus).length;
    const percentage = Math.round((tasksCompleted / numTasks) * 100);

    return (
        <footer>
            <em>
                {percentage === 100
                    ? "🎉 yay! you are done for the day!"
                    : `📋 you've completed ${tasksCompleted} tasks out of ${numTasks}, you are ${percentage}% there!`}
            </em>
        </footer>
    );
};

export default Footer;
