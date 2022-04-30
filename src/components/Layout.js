import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";


const Layout = (props) => {
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
            <i onClick={handleClearTodos}>X</i>
          </div>
          <div className="date">
              {date}
          </div>
          {/* <div className="uncheckedItem">
            Items unchecked: <span id="noUnchecked">0</span>
          </div> */}
        </div>
        <div>
          <Link to="/form">New todo</Link>
        </div>
        <div className="content">
          {props.children}
        </div>   
      </div>
    </div>
  )
}

export default Layout