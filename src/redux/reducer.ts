import { Store, Todo } from '../types'

import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    TodoActionTypes
} from '../types/actions'

export const appReducer = (state: Store, action: TodoActionTypes): Store => {
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