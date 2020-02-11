import { AppActions } from '../types'
import { SET_USER } from './types'

export const setUserAction = (name: string): AppActions => ({
    type: SET_USER,
    name: name
} as const)