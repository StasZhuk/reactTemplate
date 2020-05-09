import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from '../reducers/rootReducer'

const middleware = [thunk]

const isDevelopment = process.env.NODE_ENV === 'development'

if (isDevelopment) {
  middleware.push(logger)
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    isDevelopment
      ? window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
      : (f) => f
  )
)

export default store
