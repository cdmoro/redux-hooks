import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';

function App() {
  const completedTodos = useSelector(store => store.todo.todos.filter(todo => todo.completed))

  return (
    <div className="App">
      <h2>TODO LIST</h2>
      <TodoInput />
      <TodoList />
      {completedTodos.length > 0 && (
        <>
          <h2>COMPLETED TODOs</h2>
          {completedTodos.map(todo => (
            <div className="todo-completed" key={todo.id}>
              <span className="icon">&#10003;</span> {todo.label}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default App;
