import { combineReducers } from 'redux'

import auth from './auth'
import core from './core'

export default combineReducers({
    auth,
    core
})