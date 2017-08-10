// import React from 'react'
// import { Html } from 'react-dream'
// import withChild from './helpers/withChild'
// import Square from './Square'
//
// const Layer = Svg.G
//   .removeProps('displacement', 'rotation', 'size')
//   .translate(({ displacement: { x, y }, size }) => [
//     x - Math.floor(size / 2),
//     y - Math.floor(size / 2),
//   ])
//   .map(withChild(({ size, rotation }) => ({ size, rotation })))
//   .ap(Square)
//
// const App = Svg.Svg
//   .addProps(({ width, height }) => ({
//     viewBox: `0 0 ${width} ${height}`,
//   }))
//   .removeProps('rotation')
//   .map(
//     withChild(({ width, height, rotation }) => ({
//       displacement: {
//         x: Math.floor(width / 2),
//         y: Math.floor(height / 2),
//       },
//       rotation,
//       size: Math.floor(Math.min(width, height) / 2),
//     }))
//   )
//   .ap(Layer)
//   .removeProps('mouse', 'now', 'rawSize')
//   .name('App')
//
// export default App

import React from 'react'
import { Html } from 'react-dream'

const RotatedBigDiv = Html.Div
  .rotate(() => 45)
  .debug()
  .scale(() => 2)
  .style(({ size }) => ({
    width: size,
    height: size,
    backgroundColor: 'red',
  }))
  .name('RotatedBigDiv')

const TranslatedWrapper = Html.Div
  .log('what will get to the div:')
  .removeProps('screenWidth', 'screenHeight', 'childSize')
  .log('after translating:')
  .translate(({ screenWidth, screenHeight, childSize }) => [
    (screenWidth - childSize) / 2,
    (screenHeight - childSize) / 2,
  ])
  .map(Wrapper => Child => props =>
    <Wrapper {...props}>
      <Child size={props.childSize} />
    </Wrapper>
  )
  .ap(RotatedBigDiv)
  .name('TranslatedWrapper')

export default TranslatedWrapper
