import { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodo';

import todosData from './data.js';
import './App.css';
/* Use id to track completed state
 * Persist to local storage
 * DB by making axios
 * Add TODOs
 */
function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')));
  const [newTodo, setNewTodo] = useState('');
  const removeTodo = (index) => {
    let todosArray = [...todos];
    todosArray = todosArray.filter((todo) => todo.id !== index);
    setTodos(todosArray);
    localStorage.setItem('todos', JSON.stringify(todosArray));
  };
  const handleIsCompleted = (i) => {
    let todosArray = [...todos];
    const index = todosArray.findIndex((todo) => todo.id === i);
    if (todosArray[index].completed === true) {
      todosArray[index].completed = false;
    } else {
      todosArray[index].completed = true;
    }

    setTodos(todosArray);
    localStorage.setItem('todos', JSON.stringify(todosArray));
  };
  const addTodos = (text) => {
    if (text === '' || text.length < 3) {
      alert('Please enter a todo item first');
      return;
    }
    let todosArray = [...todos];
    todosArray = [
      ...todosArray,
      { id: todos.length + 1, title: text, completed: false },
    ];
    setTodos(todosArray);
    setNewTodo('');
    localStorage.setItem('todos', JSON.stringify(todosArray));
  };
  useEffect(() => {
    if (todos.length < 1) {
      // setTodos(todosData);
      localStorage.setItem('todos', JSON.stringify(todosData));
    }
  }, [todos]);
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <Header header_title='Todo Application' />
        </div>
        <div className='card-body'>
          <TodoItems
            todos={todos}
            removeTodo={removeTodo}
            handleCompleted={handleIsCompleted}
          />
        </div>
        <AddTodo
          setNewTodo={setNewTodo}
          newTodo={newTodo}
          addTodos={addTodos}
        />
      </div>
    </div>
  );
}

export default App;
