import { SET_TOPICS, ERROR_TOPICS } from '../action/action.types'

const initialState = {
    topics: null,
    loading: true,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TOPICS:
            return {
                ...state,
                topics: action.payload,
                loading: false,
                error: false
            }
        case ERROR_TOPICS:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}