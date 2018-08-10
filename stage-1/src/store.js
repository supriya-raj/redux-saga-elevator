import { applyMiddleware, createStore } from 'redux'

import rootReducer, { rootSaga } from './duck'

export default function () {

  const store = createStore(
    rootReducer
  )

  return store
}
