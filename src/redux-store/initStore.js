import { createStore, combineReducers, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import userReducer from './reducers/currentUserReducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
})

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 2000,
  responseType: 'json',
})

const axiosMiddlewareOptions = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      // Set authorization token
      function ({ getState, dispatch, getSourceAction }, req) {
        if (getState().currentUser.token === undefined) {
          req.headers.common['Authorization'] = 'Bearer ' + getState().currentUser.token
        }
        return req
      },
    ],
  },
}

export default function () {
  return createStore(rootReducer, applyMiddleware(axiosMiddleware(api, axiosMiddlewareOptions)))
}
