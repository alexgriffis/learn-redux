import React from 'react'
// import components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
// import router deps
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

const router = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  )
}

export default router
