import { createStore } from 'redux'
import { appReducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import uuid from 'uuid'

const initialState = {
    todos: [
        {
            id: uuid(),
            label: 'Go to the gym',
            completed: false
        },
        {
            id: uuid(),
            label: 'Learn redux!',
            completed: false
        }
    ]
}

export type AppState = ReturnType<typeof appReducer>

export const store = createStore(
    // @ts-ignore
    appReducer,
    initialState,
    composeWithDevTools()
)