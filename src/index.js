import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { initialState, reducer } from './store'
import subscribe from 'redux-heat'
import TranslatedWrapper from './App'
// import withStore from './helpers/withStore'

import resizeHeat from './heats/resize'
import mouseMoveHeat from './heats/mouseMove'
import tickHeat from './heats/tick'

const store = createStore(reducer, initialState)

subscribe(store, [resizeHeat, mouseMoveHeat, tickHeat])

// TranslatedWrapper.removeProps('dispatch')
//   .map(withStore(store))
//   .fork(TranslatedWrapperComponent => render(<TranslatedWrapperComponent />, document.getElementById('root')))

TranslatedWrapper.contramap(() => ({
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  childSize: 100,
})).fork(TranslatedWrapperComponent =>
  render(<TranslatedWrapperComponent />, document.getElementById('root'))
)
