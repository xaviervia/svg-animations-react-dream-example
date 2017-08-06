export const initialState = {
  width: 0,
  height: 0,
  mouse: { clientX: 0, clientY: 0 },
}

export const reducer = (state, action = {}) => {
  switch (action.type) {
    case 'RESIZE':
      return {
        ...state,
        rawSize: {
          height: action.payload.height,
          width: action.payload.width,
        },
      }

    case 'MOUSE_MOVE':
      return {
        ...state,
        mouse: action.payload,
      }

    case 'TICK':
      return {
        ...state,
        now: action.payload,
        rotation: state.mouse.clientX / state.width,
        width: state.rawSize.width,
        height: state.rawSize.height,
      }

    default:
      return state
  }
}
