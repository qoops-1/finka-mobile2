import { createStore, combineReducers, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import userReducer from './reducers/currentUserReducer'
import chatsReducer from './reducers/chatsReducer'

const config = require('../../appConfig.json')

const appReducer = combineReducers({
  currentUser: userReducer,
  chats: chatsReducer,
})

const rootReducer = (state, action) => {
  const resultState = action.type === 'CLEAR_STORE' ? undefined : state
  return appReducer(resultState, action)
}

const api = axios.create({
  baseURL: `http://${config.endpoint}:3000/api`,
  timeout: config.connTimeout,
  responseType: 'json',
})

const axiosMiddlewareOptions = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      // Set authorization token
      function ({ getState, dispatch, getSourceAction }, req) {
        if (getState().currentUser.token !== undefined) {
          req.headers.common['Authorization'] = 'Bearer ' + getState().currentUser.token
        }
        return req
      },
    ],
  },
}

export default function (initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(axiosMiddleware(api, axiosMiddlewareOptions)))
}
