import React from "react";

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
      <button className="de" onClick={handleDelete}>X</button>
    </li>
  )
}

export default Todo