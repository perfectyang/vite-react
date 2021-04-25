import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {Home} from './reducer/home'
import {About} from './reducer/about'
import {Login} from './reducer/login'
const reducers = combineReducers({
  Home,
  About,
  Login
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store