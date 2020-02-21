import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodoAction, toggleTodoAction } from '../redux'
import { Todo } from '../redux/todo/types';
import { AppState } from '../redux'

function TodoList() {
    const todos = useSelector(({ todo }: AppState) => todo.todos)
    const dispatch = useDispatch();

    return (
        <ul className="todo-list">
            {
                todos.map(({id, label, completed}: Todo) => 
                    <li key={id} className="todo">
                        <label className={completed ? 'completed': ''}>
                            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoAction(id))}/>
                            {label}
                        </label>
                        <button onClick={() => dispatch(removeTodoAction(id))}>X</button>
                    </li>
                )
            }
        </ul>
    )
}

export default TodoList
