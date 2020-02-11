import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../redux'

const CompletedTodo = () => {
    const completedTodos = useSelector(({ todo: { todos } }: AppState) => {
        return todos.filter(todo => todo.completed)
    })

    if (completedTodos.length === 0)
        return null

    return (
        <div className="completed-todos">
            <h2>COMPLETED TODOs</h2>
            {
                completedTodos.map(todo => 
                    (
                        <div className="todo-completed" key={todo.id}>
                            <span className="icon">&#10003;</span> {todo.label}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default CompletedTodo