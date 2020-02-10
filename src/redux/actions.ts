import { Todo, AppActions } from '../types'
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
} from '../types/actions'

export const addTodoAction = (todo: Todo): AppActions => ({
    type: ADD_TODO,
    todo: todo
})

export const toggleTodoAction = (id: string): AppActions => ({
    type: TOGGLE_TODO,
    id: id
})

export const removeTodoAction = (id: string): AppActions => ({
    type: REMOVE_TODO,
    id: id
})