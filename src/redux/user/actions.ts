import { AppActions } from '../types'
import { SET_USER } from './types'
import { IUser } from '../../interfaces/user.interface'

export const setUserAction = (user: IUser): AppActions => ({
    type: SET_USER,
    user: user
} as const)