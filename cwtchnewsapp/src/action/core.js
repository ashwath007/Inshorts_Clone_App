import { SET_CORE, ERROR_CORE } from "./action.types";
import database from '@react-native-firebase/database';

export const getCore = () => async(dispatch) => {
    try {
        database().ref('/theme/').on('value', (snapshots) => {
            if (snapshots.val()) {
                console.log("FIREBASE - ", snapshots.val());

                dispatch({
                    type: SET_CORE,
                    payload: Object.values(snapshots.val())
                })
            } else {
                dispatch({
                    type: SET_CORE,
                    payload: []
                })
            }
        })
    } catch (err) {
        console.log("FIREBASE - ", err);

        dispatch({
            type: ERROR_CORE,
        })
    }
}