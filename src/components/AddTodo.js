import React, { Fragment } from 'react';

const AddTodo = ({ setNewTodo, newTodo, addTodos }) => {
  return (
    <Fragment>
      <div className='add-todo-wrapper'>
        <h6>AddTodo</h6>
        <div>
          <input
            type='text'
            placeholder='Add todo item'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <br />
          <br />
          <button
            onClick={() => {
              addTodos(newTodo);
              setNewTodo('');
            }}
          >
            submit
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddTodo;
