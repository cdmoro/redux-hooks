import {
    UserActionTypes,
    SET_USER,
    userStore
} from "./types";

const initialState = {} as userStore

export const userReducer = (state: userStore = initialState, action: UserActionTypes): userStore => {
    switch(action.type) {
        case SET_USER:
            return action.user
        default:
            return state
    }
}