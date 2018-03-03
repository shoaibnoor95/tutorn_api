import Actiontypes from '../constant/constant'
const INITIAL_STATE = {
    userName: 'Shoaib Noor'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actiontypes.LOGIN:
            return {
                ...state,
            }
        default:
            return state
    }
}