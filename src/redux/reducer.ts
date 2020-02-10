import { Store, Todo, Action } from '../types'

import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO
} from './actions'

export const appReducer = (state: Store, action: Action): Store => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo: Todo) => {
                    if (todo.id === action.payload)
                        todo.completed = !todo.completed
                    
                    return todo
                })
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo: Todo) => todo.id !== action.payload)
            }
        default:
            return state
    }
}