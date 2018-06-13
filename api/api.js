import request from 'superagent'
import { get } from './localstorage'

const baseURL = 'https://bcg-redux.herokuapp.com/api/'

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'

  return get('questions').then(token => {
    const headers = {
      Accept: 'application/json'
    }

    console.log(baseURL + endpoint)

    return request[method](baseURL + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      console.log('Hello', err)
      throw err
    })
  })
}