import ActionTypes from '../constant/constant'

export function dummi(valu) {
    return dispatch => {
        dispatch({
            type: ActionTypes.DUM,
            payload: value
        })
    }
}