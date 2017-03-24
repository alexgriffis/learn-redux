import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './posts'
import comments from './comments'

const rootReducter = combineReducers({ posts, comments, routing: routerReducer })

export default rootReducter
