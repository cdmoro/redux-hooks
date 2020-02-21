import { AppActions } from '../types'
import { SET_USER, UserActionTypes } from './types'
import { IUser } from '../../interfaces/user.interface'

export const setUserAction = (user: IUser): AppActions => ({
    type: SET_USER,
    user: user
} as const)

export const setUserActionThunk = (user: IUser): Promise<string> => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/1')
            const data = await response.json()

            const user: IUser = {
                name: data.name,
                status: data.status,
                image: data.image,
                location: data.location.name
            }

            dispatch(setUserAction(user))
        } catch (error) {
            
        }

        return 'done'
    }
}