import {createStore as cstore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { ROOTReducer } from './reducers'

export const store = cstore(ROOTReducer,composeWithDevTools(applyMiddleware(thunk)))