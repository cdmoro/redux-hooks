import { 
    userStore, 
    UserActionTypes,
    SET_USER
} from "./types";

 const initialState: userStore = {
    name: ''
 }

export const userReducer = (state: userStore = initialState, action: UserActionTypes): userStore => {
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