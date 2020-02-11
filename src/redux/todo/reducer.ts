import { todoStore, Todo } from './types'
import uuid from 'uuid'

import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    TodoActionTypes
} from './types'

const initialState: todoStore = {
    todos: [
        {
            id: uuid(),
            label: 'Go to the gym',
            completed: false
        },
        {
            id: uuid(),
            label: 'Learn redux!',
            completed: false
        }
    ]
}

export const todoReducer = (state: todoStore = initialState, action: TodoActionTypes): todoStore => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo: Todo) => {
                    if (todo.id === action.id)
                        todo.completed = !todo.completed
                    
                    return todo
                })
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo: Todo) => todo.id !== action.id)
            }
        default:
            return state
    }
}