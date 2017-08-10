import React from 'react'
import { Svg } from 'react-dream'



const RotatedBigDiv = Html.Div
  .rotate(() => 0.25)
  .scale(2)
  .style(() => ({
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }))
  .name('RotatedBigDiv')

const TranslatedWrapper = Html.Div
  .translate(({screenWidth, screenHeight, childSize}) => [(screenWidth - childSize) / 2), (screenHeight - childSize) / 2])

// is the same as
const Title = Html.H1
  .contramap(({ label, ...props }) => props)
  .name('Title')



// const Square = ReactDream(x => x)
//   .scale(props => 1.5)
//   .promap(
//     // converts the props before they reach the component
//     ({ size, rotation }) => ({
//       x: 0,
//       y: 0,
//       width: size,
//       height: size,
//       style: {
//         transformOrigin: 'center',
//         transform: `rotate(${rotation * 360}deg)`,
//       },
//     }),
//     identity => props => <rect {...identity(props)} />
//   )
//   .name('Square')

export default Square
