import React, { useState } from 'react';
import { useEffect } from 'react';
import Task from './Task';

const Main = () => {
  const initialArray = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, completed: false }]);
    setTitle('');
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });

    setTasks(filteredArr);
  };

  const toggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='container'>
      <h1>Todo</h1>
      <div className='box'>
        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            completed={item.completed}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            index={index}
          />
        ))}
      </div>
      <div className='down'>
        <form onSubmit={addTask}>
          <input
            type='text'
            placeholder='Add Task Here'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type='submit'>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
