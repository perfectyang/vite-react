import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
// import { devToolsEnhancer } from 'redux-devtools-extension'
import {Home} from './reducer/home'
import {About} from './reducer/about'
const reducers = combineReducers({
  Home,
  About
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store