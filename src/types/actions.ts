import { Todo } from "."

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export interface AddTodoAction {
    type: typeof ADD_TODO,
    todo: Todo
}

export interface ToggleTodoAction {
    type: typeof TOGGLE_TODO,
    id: string
}

export interface RemoveTodoAction {
    type: typeof REMOVE_TODO,
    id: string
}

// TodoActions only
export type TodoActionTypes = AddTodoAction | ToggleTodoAction | RemoveTodoAction