import { IUser } from "../../interfaces/user.interface"

export const SET_USER = 'SET_USER'

export type userStore = IUser

export interface SetUserAction {
    type: typeof SET_USER,
    user: IUser
}

// TodoActions only
export type UserActionTypes = SetUserAction