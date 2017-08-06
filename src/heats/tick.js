import fromRequestAnimationFrame from '../helpers/fromRequestAnimationFrame'

export default () =>
  fromRequestAnimationFrame().map(timestamp => ({
    type: 'TICK',
    payload: timestamp,
  }))
