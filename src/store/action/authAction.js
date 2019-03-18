import actionTypes from './actionTypes'

export const auth = (userDetail) => {
    return {
        type: actionTypes.AUTH,
        payload: userDetail,
    }
}