export interface Store {
    todos: Todo[]
}

export interface Todo {
    id: number,
    label: string,
    completed: boolean
}

export interface Action {
    type: string,
    payload?: any
}