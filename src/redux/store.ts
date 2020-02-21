import { createStore, combineReducers, applyMiddleware } from 'redux'
import { todoReducer } from './todo/reducer'
import { userReducer } from './user/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
}) 

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)