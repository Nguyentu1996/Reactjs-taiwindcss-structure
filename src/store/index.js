import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
// import { config } from '../configs/env.config.json'
import reducer from './reducers'
import sagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// const history = createBrowserHistory({
//   basename: config.BASE_NAME
// })

// mount it on the Store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
// then run the saga
sagaMiddleware.run(sagas)

// render the application
const Store = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)

export default Store
