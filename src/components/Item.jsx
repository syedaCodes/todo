const Item = ({ description, priority, status }) => {
    return (
        <li>
            <input type="checkbox" id={description} />
            <label htmlFor={description}>
                <span className={status ? "task-completed" : {}}>
                    {priority} {description}
                </span>
            </label>
            <button>❌</button>
        </li>
    );
};

export default Item;
