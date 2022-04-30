import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

function TodoForm({addTodo}) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    startTime: "",
    endTime: ""
  });

  function inputChangeHandler(e) {
    setTodo({...todo, task: e.target.value});
  }

  function startTimeHandler(e) {
    setTodo({...todo, startTime: e.target.value})
  }

  function endTimeHandler(e) {
    setTodo({...todo, endTime: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(todo.task.trim()){
      addTodo({...todo, id: uuid()});
      setTodo({...todo, task: "", startTime:"", endTime:""});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-to-do">
      <div className="form-control">
        <label for="task">Task: </label>
        <input name="task" id="task" type="text" placeholder="Add a to-do" value={todo.task} onChange={inputChangeHandler}/>
      </div>
      <div className="form-control">
        <label for="startTime" >Start Time: </label>
        <input name="startTime" id="startTime" type='time' placeholder="Start time" value={todo.startTime} onChange={startTimeHandler} />
      </div>
      <div className="form-control">
        <label for="endTime" >End Time: </label>
        <input name="endTime" id="endTime" type='time' placeholder="End time" value={todo.endTime} onChange={endTimeHandler} />
      </div>
      <button type="submit">Add</button>
    </form>
  )

  
}


export default TodoForm;