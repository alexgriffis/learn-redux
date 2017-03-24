import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// import css
import css from './styles/style.styl'
// import components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
// import router deps
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

const router = (
  <AppContainer>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </AppContainer>
)

render(
  router,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept(Main, () => {
    render(router)
  })
}
