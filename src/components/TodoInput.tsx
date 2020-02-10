import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../redux'
import uuid from 'uuid'

function TodoInput() {
    const [todoValue, setTodoValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault()

      if (todoValue.length > 0) {
        dispatch(
          addTodoAction({
            id: uuid(),
            label: todoValue,
            completed: false
          })
        )

        setTodoValue("")
      }
    }

    return (
        <form className="todo-input">
            <input
                type="text"
                value={todoValue}
                onChange={e => setTodoValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Add todo</button>
        </form>
    )
}

export default TodoInput
