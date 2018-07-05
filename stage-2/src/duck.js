import { delay, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

const initialState = {
  floor: 1
}

//Reducer
export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case 'change-floor':
      return {
        ...currentState,
        floor: action.floor
      }
    default:
      return currentState
  }
}

//action creatore
export const changeFloor = (floor) => ({ type: 'change-floor', floor })

// // saga actions
// export const startClock = () => ({ type: 'start-clock' })
// export const pauseClock = () => ({ type: 'pause-clock' })
// export const rewindClock = () => ({ type: 'rewind-clock' })

// saga
export function* rootSaga () {
  //yield takeLatest(['start-clock', 'pause-clock', 'rewind-clock'], handleClockAction)
}
