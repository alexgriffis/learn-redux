import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// import css
import css from './styles/style.styl'
// import components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'
// import router deps
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={PhotoGrid} />
          <Route path='/view/:postId' component={Single} />
        </Route>
      </Router>
    </Provider>
  </AppContainer>
)

render(
  router,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept(App, () => {
    render(router)
  })
}
