import { createStore, combineReducers } from 'redux'

import userReducer from '../reducers/user'
import chatReducer from '../reducers/chat'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        chat: chatReducer
    }))
    return store
}

export default configureStore