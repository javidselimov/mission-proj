

import { combineReducers } from 'redux'
import { filmReducers } from './filmReducers'
import { cartReducers } from './cartReducers'

export const ROOTReducer = combineReducers({
    films: filmReducers,
    cart:cartReducers
})