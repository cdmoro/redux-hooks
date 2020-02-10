import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
