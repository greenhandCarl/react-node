import React from 'react'
import { render } from 'react-dom'
import store from './store/index'
import { Provider } from 'react-redux'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
// registerServiceWorker()
