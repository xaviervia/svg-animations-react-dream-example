import { fromEvent } from 'most'

export default () =>
  fromEvent('mousemove', window).map(({ clientX, clientY }) => ({
    type: 'MOUSE_MOVE',
    payload: { clientX, clientY },
  }))
