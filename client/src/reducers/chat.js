const initialState = {}
const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT_USER' : 
            return {...state, ...{id: action.payload.user, fullname: action.payload.fullname}}
        case 'IS_LOADED' : 
            return {...state, ...{isLoaded: action.payload}}
        case 'SHOW_MESSAGES' :
            return {...state, ...{messages: action.payload}}
        case 'SEND_MESSAGE' :
            return {...state, ...{messages: state.messages.concat(action.payload)}}
        default: 
            return state
    }
}

export default chatReducer