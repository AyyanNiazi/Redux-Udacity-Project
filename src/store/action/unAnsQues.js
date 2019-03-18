import actionTypes from './actionTypes'

export default  function choiceAction (unAnsQuesDetail){
    return {
        type: actionTypes.CHOICE,
        payload: unAnsQuesDetail,
    }
}