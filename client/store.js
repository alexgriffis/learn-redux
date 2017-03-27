import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/root'

import comments from './data/comments'
import posts from './data/posts'

// create an object for the default data
const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/root', () => {
    const nextRootReducer = require('./reducers/root').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
