import { createStore, combineReducers, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://35.158.166.52:3000/api',
  responseType: 'json',
})

const initialState = {}

export default function () {
  return createStore(combineReducers(), initialState, applyMiddleware(axiosMiddleware(api)))
}
