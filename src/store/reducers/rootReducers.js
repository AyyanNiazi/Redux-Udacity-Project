import {combineReducers} from 'redux'
import authReducers from './authReducers'
import dataReducers from './dataReducers'


const rootReducers = combineReducers({
    auth : authReducers,
    data: dataReducers
})

export default rootReducers