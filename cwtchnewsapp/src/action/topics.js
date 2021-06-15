import { SET_TOPICS, ERROR_TOPICS } from "./action.types";
import database from '@react-native-firebase/database';



export const getTopics = () => async(dispatch) => {

    try {

        database().ref('/suggested/').on('value', (snap) => {
            if (snap.val()) {
                console.log("FIREBASE - ", snap.val());

                dispatch({
                    type: SET_TOPICS,
                    payload: Object.values(snap.val())
                })
            } else {
                dispatch({
                    type: SET_TOPICS,
                    payload: []
                })
            }
        })
    } catch (err) {

        console.log("FIREBASE - ", err);

        dispatch({
            type: ERROR_TOPICS
        })
    }
}