import actionTypes from '../action/actionTypes'

const initialState = {
    nextQues: [],
    unAnsQuesChoice: []
}

function dataReducers(state = initialState, action) {
let newState = {...state}
    switch(action.type) {
        case actionTypes.NEXTQUES : { 
         newState.nextQues.push(action.payload);
         break;
        }
        case actionTypes.CHOICE: {
            newState.unAnsQuesChoice.push(action.payload)
        }
    }
    return newState

}
export default dataReducers