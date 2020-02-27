import React, { useState } from 'react';

const INITIAL_STATE = ""

const NewTodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    setFormData(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Task:</label>
      <input id="task" name="newTask" type="text" onChange={handleChange} value={formData}/>
      <button>Add!</button>
    </form>
  );
};

export default NewTodoForm;