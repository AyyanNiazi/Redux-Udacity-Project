import actionTypes from './actionTypes'

const auth = (userDetail) => {
    return {
        type: actionTypes.AUTH,
        payload: userDetail.select,
    }
}

export default auth