import React from 'react';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import CompletedTodos from './components/CompletedTodos';

function App() {
  return (
    <div className="App">
      <h2>TODO LIST</h2>
      <TodoInput />
      <TodoList />
      <CompletedTodos />
    </div>
  )
}

export default App;
