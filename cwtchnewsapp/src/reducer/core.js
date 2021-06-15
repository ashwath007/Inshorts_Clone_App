import { SET_CORE, ERROR_CORE } from '../action/action.types'

const initialState = {
    core: null,
    loading: true,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CORE:
            return {
                ...state,
                core: action.payload,
                loading: false,
                error: false
            }
        case ERROR_CORE:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}