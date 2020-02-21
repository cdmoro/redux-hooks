import React from 'react';

import { Provider } from "react-redux"
import { store } from "./redux"

import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import CompletedTodos from './components/CompletedTodos';
import UserHeader from './components/UserHeader';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserHeader />
        <h2>TODO LIST</h2>
        <TodoInput />
        <TodoList />
        <CompletedTodos />
      </div>
    </Provider>
  )
}

export default App;
