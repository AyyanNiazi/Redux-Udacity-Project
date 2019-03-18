import actionTypes from '../action/actionTypes'

const initialReducers = {
    authLogged: false,
    users: ['initial'],
}

function authReducers(state = {initialReducers}, action){ // pure function

    switch(action.type){
        case actionTypes.AUTH : {
            return state = {
                users: action.payload,
                authLogged: !false,
            }
        }

        default : return {...state}
    }
}

export default authReducers