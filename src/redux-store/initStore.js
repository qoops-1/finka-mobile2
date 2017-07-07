import { createStore, combineReducers, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://35.158.166.52:3000/api',
  responseType: 'json',
})

export default function () {
  return createStore(combineReducers(), applyMiddleware(axiosMiddleware(api)))
}
