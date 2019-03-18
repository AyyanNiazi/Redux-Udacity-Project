import actionTypes from './actionTypes'

const auth = (userDetail) => {
    return {
        type: actionTypes.AUTH,
        payload: userDetail.name,
    }
}

export default auth