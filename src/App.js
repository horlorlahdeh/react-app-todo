import { useState } from 'react';
import Header from './components/Header';
import TodoItems from './components/TodoItems';

import todosData from './data.js';
import './App.css';
/* Use id to track completed state
 * Persist to local storage
 * DB by making axios
 * Add TODOs
 */
function App() {
  const [todos, setTodos] = useState(todosData);
  const removeTodo = (index) => {
    let todosArray = [...todos];
    todosArray = todosArray.filter((todo) => todo.id !== index);
    setTodos(todosArray);
  };
  const handleIsCompleted = (i) => {
    let todosArray = [...todos];
    if (todosArray[i].completed === true) {
      todosArray[i].completed = false;
    } else {
      todosArray[i].completed = true;
    }

    setTodos(todosArray);
  };
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
      </div>
    </div>
  );
}

export default App;
