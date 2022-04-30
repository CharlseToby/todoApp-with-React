import React from "react";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Todo({ todo, toggleComplete, deleteTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id)
    // console.log(todo.id);
  }

  function handleDelete(id) {
    deleteTodo(todo.id)
  }


  return (
    
    <li className="item">
      <input type="checkbox" className="co" onClick={handleCheckboxClick}/> 
      <p className="text" style={{textDecoration: todo.completed ? "line-through" : null}}>{todo.task}</p>
      <p className="endTime">End: {todo.endTime}</p>
      <p className="modify" /* onClick={handleModify} */><Link to={`/${todo.task}`}><FontAwesomeIcon icon={faPenToSquare} /></Link></p>
      <button className="de" onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></button>
    </li>
  )
}

export default Todo