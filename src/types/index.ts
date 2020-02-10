import { TodoActionTypes } from "./actions";

export interface Store {
    todos: Todo[]
}

export interface Todo {
    id: string,
    label: string,
    completed: boolean
}

// AppActions
export type AppActions = TodoActionTypes