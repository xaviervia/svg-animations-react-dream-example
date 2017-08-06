import { Svg } from 'react-dream'
import withChild from './helpers/withChild'

const Square = Svg.Rect
  .addProps(({ size }) => ({
    x: 0,
    y: 0,
    width: size,
    height: size,
  }))
  .removeProps('rotation')
  .style(({ size }) => ({
    transformOrigin: 'center',
  }))
  .rotate(({ rotation }) => rotation * 360)
  .name('Square')

const Layer = Svg.G
  .removeProps('displacement', 'rotation', 'size')
  .translate(({ displacement: { x, y }, size }) => [
    x - Math.floor(size / 2),
    y - Math.floor(size / 2),
  ])
  .map(withChild(({ size, rotation }) => ({ size, rotation })))
  .ap(Square)

const App = Svg.Svg
  .addProps(({ width, height }) => ({
    viewBox: `0 0 ${width} ${height}`,
  }))
  .removeProps('rotation')
  .map(
    withChild(({ width, height, rotation }) => ({
      displacement: {
        x: Math.floor(width / 2),
        y: Math.floor(height / 2),
      },
      rotation,
      size: Math.floor(Math.min(width, height) / 2),
    }))
  )
  .ap(Layer)
  .removeProps('mouse', 'now', 'rawSize')
  .name('App')

export default App
