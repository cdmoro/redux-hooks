import React from 'react';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import CompletedTodo from './components/CompletedTodo';

function App() {
  return (
    <div className="App">
      <h2>TODO LIST</h2>
      <TodoInput />
      <TodoList />
      <CompletedTodo />
    </div>
  )
}

export default App;
