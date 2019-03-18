import actionTypes from './actionTypes'

export default function nextQuestion  (quesDetail)  {
  
    return {
        type: actionTypes.NEXTQUES,
        payload: quesDetail
    }

}



// export  {nextQuestion, choiceAction};