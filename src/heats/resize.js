import { fromEvent, of } from 'most'

export default () =>
  fromEvent('resize', window)
    .map(() => ({
      type: 'RESIZE',
      payload: { width: window.innerWidth, height: window.innerHeight },
    }))
    .merge(
      of({ type: 'RESIZE', payload: { width: window.innerWidth, height: window.innerHeight } })
    )
