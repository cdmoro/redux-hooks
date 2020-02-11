export const SET_USER = 'SET_USER'

export interface userStore {
    name: string
}

export interface SetUserAction {
    type: typeof SET_USER,
    name: string
}

// TodoActions only
export type UserActionTypes = SetUserAction