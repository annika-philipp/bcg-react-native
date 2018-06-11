import { combineReducers } from 'redux'

import location from './location'
import index from './questionsIndex'
import questions from './questions'
import score from './score'

export default combineReducers({
  location,
  index,
  questions,
  score
})
