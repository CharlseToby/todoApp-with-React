import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import TodoForm from '../components/TodoForm';



const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const ModifyTodo = () => {
  
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  const [todos, setTodos] = useState(storageTodos);

  let params = useParams();
  
    // console.log(params.task);
    
    let oldTodo = todos.find(item => item.task === params.task);
    let modifiedTodo = {};
    // console.log(oldTodo);
    let {task, id, startTime, endTime} = oldTodo;
    // console.log(task, id);

    const newTodoarray = todos.filter(item => item.task !== params.task);
    // console.log(newTodoarray);

    const [todoTask, setTodoTask] = useState(task);
    const [todoStartTime, setStartTime] = useState(startTime);
    const [todoEndTime, setEndTime] = useState(endTime);

    // console.log(todoTask);

    let filteredTodos = todos.filter(item => item.task !== params.task);
    // console.log(filteredTodos);

    

  function inputChangeHandler(e) {
    setTodoTask(e.target.value);
  }
  function startTimeHandler(e) {
    setStartTime(e.target.value)
  }

  function endTimeHandler(e) {
    setEndTime(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(todoTask.trim()){
      setTodoTask("");
      modifiedTodo = {...oldTodo, task: todoTask};
      let newStorageTodos = [...filteredTodos, modifiedTodo];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newStorageTodos));
      // setTodos([...filteredTodos, modifiedTodo])
      // console.log(modifiedTodo);
    }
    // console.log(task);
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
          <form onSubmit={handleSubmit} className="add-to-do">
            <div className="form-control">
              <label htmlFor="task">Task: </label>
              <input name="task" id="task" type="text" placeholder="Add a to-do" value={todoTask} onChange={inputChangeHandler}/>
            </div>
            <div className="form-control">
              <label htmlFor="startTime" >Start Time: </label>
              <input name="startTime" id="startTime" type='time' placeholder="Start time" value={todoStartTime} onChange={startTimeHandler} />
            </div>
            <div className="form-control">
              <label htmlFor="endTime" >End Time: </label>
              <input name="endTime" id="endTime" type='time' placeholder="End time" value={todoEndTime} onChange={endTimeHandler} />
            </div>
            <button type="submit">Modify</button>
          </form>
        </div> 
      </div>
    </div>
    
  )
}

export default ModifyTodo