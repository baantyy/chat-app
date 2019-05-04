//import { loadState } from "../store/localStorage"

const initialState = localStorage.getItem('user') ? { auth: JSON.parse(localStorage.getItem('user'))} : {}
const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_STATUS' : 
            return {...state, ...{formStatus: action.payload}}
        case 'SAVE_USER' : 
            return {...state, ...{auth: action.payload}}
        case 'REMOVE_USER' : 
            return {}
        case 'SAVE_ALL_USERS' : 
            return {...state, ...{users: action.payload, filteredUsers: action.payload}}
        case 'SEARCH_USER' : 
            return {...state, ...{filteredUsers: action.payload}}
        default: 
            return state
    }
}

export default userReducer