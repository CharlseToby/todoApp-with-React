import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from '../components/TodoForm'


const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const Form = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  
    if(storageTodos) {
      setTodos(storageTodos);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
    alert("Todo added");
  }

  const options = {weekday : "long", month:"short", day:"numeric"};
  const today = new Date();

  let date = today.toLocaleDateString("en-US", options);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="clear">
            {/* <i onClick={handleClearTodos}>X</i> */}
          </div>
          <div className="date">
              {date}
          </div>
          <div className="page">
            <Link to="/">Home</Link>
          </div>
          {/* <div className="uncheckedItem">
            Items unchecked: <span id="noUnchecked">0</span>
          </div> */}
        </div>
        <div className="content">
          <TodoForm addTodo={addTodo} />
        </div>   
      </div>
    </div>
  )
}


export default Form