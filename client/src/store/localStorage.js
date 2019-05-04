export const loadState = () => {
    try{
        const prevState = localStorage.getItem('state')
        if(!prevState){
            return undefined
        }
        return JSON.parse(prevState)
    }
    catch(err){
        return undefined
    }
}

export const saveState = (state) => {
    try{
        const newState = JSON.stringify(state)
        localStorage.setItem('state', newState)
    }
    catch(err){
        // errors
    }
}