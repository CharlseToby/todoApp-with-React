import React, { useEffect, useState } from "react";
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import TodoList from "../components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const Home = () => {
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
  
  
  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo, 
            completed: !todo.completed
          };
        }
            return todo;
      })
    )
  }
  
  function deleteTodo(id) {
    setTodos(
      todos.filter(todo =>  todo.id !== id)
    )
  }
  
  function handleClearTodos() {
    setTodos([])
  }

  const options = {weekday : "long", month:"short", day:"numeric"};
  const today = new Date();

  let date = today.toLocaleDateString("en-US", options);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="clear">
            <i onClick={handleClearTodos}><FontAwesomeIcon icon={faArrowRotateRight} /></i>
          </div>
          <div className="date">
              {date}
          </div>
          <div className="page">
            <Link to="/form">Create todo</Link>
          </div>
          {/* <div className="uncheckedItem">
            Items unchecked: <span id="noUnchecked">0</span>
          </div> */}
        </div>
        <div className="content">
          <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        </div>  
      </div>
    </div>
    
  )
}

export default Home