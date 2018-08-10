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

//action creators
export const changeFloor = (floor) => ({ type: 'change-floor', floor })
