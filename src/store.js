export const initialState = {
  width: 0,
  height: 0,
}

export const reducer = (state, action = {}) => {
  switch (action.type) {
    case 'RESIZE':
      return {
        ...state,
        height: action.payload.height,
        width: action.payload.width,
      }

    default:
      return state
  }
}
