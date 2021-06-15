import { SET_NEWS, ERROR_NEWS } from "../action/action.types";

const initialState = {
    news: null,
    loading: true,
    error: false
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: false,
                error: false
            }
        case ERROR_NEWS:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}