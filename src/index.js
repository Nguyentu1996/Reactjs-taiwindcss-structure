import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './translates/i18n'
import App from './app/app'
import './resources/styles/index'
import { withToastProvider } from './components/core/toast'

const AppWithToastProvider = withToastProvider(App)

ReactDOM.render(
  <BrowserRouter>
    <AppWithToastProvider />
  </BrowserRouter>,
  document.getElementById('root')
)
