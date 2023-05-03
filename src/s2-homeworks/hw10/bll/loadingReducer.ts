const initState = {
    isLoading: false,
}

export type loadingStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): loadingStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            let stateCopy = {...state}
            stateCopy.isLoading = action.isLoading
            return stateCopy
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
