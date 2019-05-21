import { createStore, combineReducers } from 'redux'

import userReducer from '../reducers/user'
import chatReducer from '../reducers/chat'
import screenReducer from '../reducers/screen'

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        chat: chatReducer,
        screen: screenReducer
    }))
    return store
}

export default configureStore