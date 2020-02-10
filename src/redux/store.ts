import { createStore } from 'redux'
import { appReducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    todos: [
        {
            id: 1,
            label: 'Go to the gym',
            completed: false
        },
        {
            id: 2,
            label: 'Learn redux!',
            completed: false
        }
    ]
}

export const store = createStore(
    // @ts-ignore
    appReducer,
    initialState,
    composeWithDevTools()
)