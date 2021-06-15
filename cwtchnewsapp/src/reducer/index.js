import { combineReducers } from 'redux'

import auth from './auth'
import core from './core'
import topics from './topics'


export default combineReducers({
    auth,
    core,
    topics
})