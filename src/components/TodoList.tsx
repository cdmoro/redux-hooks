import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodoAction, toggleTodoAction } from '../redux'
import { Todo } from '../redux/todo/types';
import { AppState } from '../redux'

function TodoList() {
    const todos = useSelector((state: AppState) => state.todo.todos)
    const dispatch = useDispatch();
    const removeTodo = (id: string) => dispatch(removeTodoAction(id))
    const toggleTodo = (id: string) => dispatch(toggleTodoAction(id))

    return (
        <ul className="todo-list">
            {
                todos.map(({id, label, completed}: Todo) => 
                    <li key={id} className="todo">
                        <label className={completed ? 'completed': ''}>
                            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
                            {label}
                        </label>
                        <button onClick={() => removeTodo(id)}>X</button>
                    </li>
                )
            }
        </ul>
    )
}

export default TodoList
