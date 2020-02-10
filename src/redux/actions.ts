import { Todo } from '../types'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodoAction = (todo: Todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const toggleTodoAction = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const removeTodoAction = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
})