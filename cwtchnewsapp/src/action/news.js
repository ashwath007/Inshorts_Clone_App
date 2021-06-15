import { SET_NEWS, ERROR_NEWS } from "./action.types";
import database from "@react-native-firebase/database"

export const getAllNews = () => async(dispatch) => {
    try {
        database().ref('/news/').on('value', (snap) => {
            if (snap.val()) {
                dispatch({
                    type: SET_NEWS,
                    payload: Object.values(snap.val())
                })
            } else {
                dispatch({
                    type: ERROR_NEWS,
                    payload: []
                })
            }
        })
    } catch (err) {
        dispatch({
            type: ERROR_NEWS
        })
    }
}