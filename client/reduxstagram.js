import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// import css
import css from './styles/style.styl'
// import components
import Main from './components/Main'

ReactDOM.render(
  <AppContainer>
    <Main />
  </AppContainer>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Main', () => {
    const NextApp = require('./components/Main').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
