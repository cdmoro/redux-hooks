import { SET_USER } from './types'
import { IUser } from '../../interfaces/user.interface'
import { Dispatch } from 'redux'

export const setUserAction = (user: IUser) => ({
    type: SET_USER,
    user: user
} as const)

export const fetchUserAction = () => {
    return async (dispatch: Dispatch) => {
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
    }
}