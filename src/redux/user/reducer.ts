import { userStore } from "./types";

import { 
    SET_USER,
    SetUserAction
 } from './types'

 const initialState: userStore = {
    name: ''
 }

export const userReducer = (state: userStore = initialState, action: SetUserAction): userStore => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}