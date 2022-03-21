import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ todos, removeTodo, handleCompleted }) => {
  return (
    <div className='todo-items'>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleRemoveTodo={removeTodo}
            handleCompleted={handleCompleted}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
