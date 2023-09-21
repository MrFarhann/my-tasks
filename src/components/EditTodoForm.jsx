import React, {useState} from 'react'

export const EditTodoForm = ({editTask, task}) => {
    const [value, setValue] = useState("");
    const handleOnChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        editTask(value, task.id);
        setValue("");
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Write your new task..." value={value} onChange={handleOnChange}/>
            <button type="submit" className="todo-btn">Edit Task</button>
        </form>
    )
}
