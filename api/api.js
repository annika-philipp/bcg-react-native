import request from 'superagent'
import { get } from './localstorage'

const baseURL = 'https://bcg-redux.herokuapp.com/'

export default function consume(method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
    const headers = {
      Accept: 'application/json'
    }
    return request[method](baseURL + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      console.log('Hello I have an error', err)
      throw err
    })
}