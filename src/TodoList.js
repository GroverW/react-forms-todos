import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';

const TodoList = () => {
  const [ todos, setTodos ] = useState([]);

  const addTodo = (task) => {
    let newTask = {task, id:uuid()};
    setTodos(todos => [...todos, newTask]);
  }

  const removeTodo = (id) => {
    const newList = todos.filter(todo => todo.id !== id);
    setTodos(newList);
  }

  const editTodo = ({id, task}) => {
    let newList = todos.map(todo => id === todo.id ? {...todo, task:task} : todo);
    setTodos(newList);
  }

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo}/>
      {todos.map(todo => (
        <Todo id={todo.id} task={todo.task} removeTodo={removeTodo} editTodo={editTodo} key={todo.id}/>
      ))}
    </div>
  );
};

export default TodoList;