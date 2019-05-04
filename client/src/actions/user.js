export const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        payload: user
    }
}
export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}
export const authStatus = (status, css, msg) => {
    return {
        type: 'AUTH_STATUS',
        payload: { status, css, msg }
    }
}
export const saveAllUsers = (users) => {
    return {
        type: 'SAVE_ALL_USERS',
        payload: users
    }
}
export const searchUser = (users) => {
    return {
        type: 'SEARCH_USER',
        payload: users
    }
}