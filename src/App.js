import { Svg } from 'react-dream'

const App = Svg.Svg
  .addProps(({ width, height }) => ({
    viewBox: `0 0 ${width} ${height}`,
  }))
  .name('App')

export default App
