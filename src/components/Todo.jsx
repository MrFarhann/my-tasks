import React from 'react'
import {FaRegPenToSquare} from "react-icons/fa6";
import {FaRegTrashAlt} from "react-icons/fa";

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className="Todo">
            <p onClick={ () => toggleComplete(task.id) } className={`${task.complete ? "complete" : ""}`}>{task.task}</p>
            <div>
                <div onClick={() => editTodo(task.id)}><FaRegPenToSquare/></div>
                <div onClick={() => deleteTodo(task.id)}><FaRegTrashAlt/></div>
            </div>
        </div>
    )
}
