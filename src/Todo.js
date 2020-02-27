import React, {useState} from 'react';
import './Todo.css';

const Todo = ({removeTodo, editTodo, task, id}) => {
  const [todo, setTodo] = useState({task, showEdit: false});
  function showEditForm(evt) {
    let editState = {...todo, showEdit: true}
    setTodo(editState);
  }

  const handleChange = (evt) => {
    let newTodo = {...todo, task: evt.target.value}
    setTodo(newTodo);
  }

  const handleEdit = (evt) => {
    evt.preventDefault();
    editTodo(todo);
    let edit = {...todo, showEdit:false};
    setTodo(edit);
  }

  return (
    <div>
      {todo.showEdit ?
      (<form className="update" onSubmit={handleEdit} >
        <label htmlFor="Edit">Edit Task:</label>
        <input value={todo.task} type="text" name="edit" id="Edit" onChange={handleChange}/>
        <button>Update</button>
      </form>) :
      <p>{todo.task}</p>
      }
      <button onClick={() => removeTodo(id)}>Delete</button>
      <button onClick={showEditForm}>Edit</button>
    </div>
  );
};

export default Todo;