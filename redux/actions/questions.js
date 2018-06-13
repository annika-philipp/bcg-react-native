import request from '../../api/api'

export function receiveQuestions (questionsarray) {
  return {
    type: 'RECEIVE_QUESTIONS',
    questionsarray
  }
}

export function fetchQuestions () {
  return (dispatch) => {
    return request ('get', 'api/questions')
      .then(res => {
        dispatch(receiveQuestions(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function increaseIndex (num) {
  return {
    type: 'INCREASE_INDEX',
    num
  }
}

export function showError (message) {
  return {
    type: 'SHOW_ERROR',
    message
  }
}

// export function fetchQuestions () {
//   console.log("enter the fetch")
//   return fetch('https://bcg-redux.herokuapp.com/api/questions')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         console.log("responseJSON ", responseJSON)
//         dispatch(receiveQuestions(responseJson.body))
//       })
//       .catch((error) =>{
//         console.error(error);
//       })

    
//     }

// fetch('https://bcg-redux.herokuapp.com/api/questions', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// });