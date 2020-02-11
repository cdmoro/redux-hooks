import { createStore, combineReducers } from 'redux'
import { todoReducer } from './todo/reducer'
import { userReducer } from './user/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
}) 

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
    // @ts-ignore
    rootReducer,
    composeWithDevTools()
)