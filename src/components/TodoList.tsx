import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodoAction, toggleTodoAction } from '../redux'
import { Store, Todo } from '../types';

function TodoList() {
    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch();
    const removeTodo = (id: number) => dispatch(removeTodoAction(id))
    const toggleTodo = (id: number) => dispatch(toggleTodoAction(id))

    return (
        <ul className="todo-list">
            {
                todos.map((todo: Todo) => 
                    <li key={todo.id} className={todo.completed ? 'todo completed' : 'todo'}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
                            {todo.label}
                        </label>
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                )
            }
        </ul>
    )
}

export default TodoList
