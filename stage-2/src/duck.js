import { delay, takeLatest } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'

const initialState = {
  floor: 1
}

//Redux Reducer
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

//Redux action creators
export const changeFloor = (floor) => ({ type: 'change-floor', floor })

//Saga Action Creators
export const changeFloorAndWait = (floor) => ({ type: 'change-floor-and-wait', floor })

//Saga Watcher
export function* rootSaga () {
  while (true) {
    let {floor} = yield take('change-floor-and-wait')
    yield put(changeFloor(floor));
    yield (delay,5200);
  }
}
