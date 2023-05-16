import React from 'react';
import "./Task.css"

const Task = ({ title, completed, toggleCompleted, deleteTask, index }) => {
  return (
    <div className="Task" >
      <div style={{display: 'flex'}}>
        <label className="checkbox-container">
          <input type="checkbox" checked={completed} onChange={() => toggleCompleted(index)} />
          <span className="checkmark"></span>
        </label>
        <p style={{ textDecoration: completed ? 'line-through' : 'none' , marginLeft:'20px'}}>{title}</p>
      </div>
      <button onClick={() => deleteTask(index)}>X</button>
    </div>
  );
};

export default Task;
