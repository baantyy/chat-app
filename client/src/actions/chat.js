export const selectUser = (user, fullname) => {
    return {
        type: 'SELECT_USER',
        payload: {user, fullname}
    }
}
export const isLoaded = (value) => {
    return {
        type: 'IS_LOADED',
        payload: value
    }
}
export const showMessages = (messages) => {
    return {
        type: 'SHOW_MESSAGES',
        payload: messages
    }
}
export const sendMessage = (message) => {
    return {
        type: 'SEND_MESSAGE',
        payload: message
    }
}