import React from 'react'
import {FaRegPenToSquare} from "react-icons/fa6";
import {FaRegTrashAlt} from "react-icons/fa";

export const Todo = ({task}) => {
    return (
        <div className="Todo">
            <p className={`${task.complete ? "complete" : ""}`}>{task.task}</p>
            <div>
                <div><FaRegPenToSquare/></div>
                <div><FaRegTrashAlt/></div>
            </div>
        </div>
    )
}
