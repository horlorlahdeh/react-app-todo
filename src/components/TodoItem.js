import React from 'react';

const TodoItem = ({ todo, handleRemoveTodo, handleCompleted, index }) => {
  return (
    <div className='todo-item'>
      <div>
        <input
          checked={todo.completed ? true : false}
          type='checkbox'
          onChange={() => handleCompleted(todo.id)}
          name='todo-status'
        />
      </div>
      <div>
        <h3 className={`${todo.completed === true ? 'line-through' : ''}`}>
          {todo.title}
        </h3>
      </div>
      <div>
        <button onClick={() => handleRemoveTodo(todo.id)}>remove</button>
      </div>
    </div>
  );
};

export default TodoItem;
