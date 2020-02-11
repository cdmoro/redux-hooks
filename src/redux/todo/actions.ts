import { Todo } from './types'
import { AppActions } from '../types'
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
} from './types'

export const addTodoAction = (todo: Todo): AppActions => ({
    type: ADD_TODO,
    todo: todo
} as const)

export const toggleTodoAction = (id: string): AppActions => ({
    type: TOGGLE_TODO,
    id: id
} as const)

export const removeTodoAction = (id: string): AppActions => ({
    type: REMOVE_TODO,
    id: id
} as const)