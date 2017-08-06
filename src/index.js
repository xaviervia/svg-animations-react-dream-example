import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { initialState, reducer } from './store'
import subscribe from 'redux-heat'
import App from './App'
import withStore from './helpers/withStore'

import resizeHeat from './heats/resize'
import mouseMoveHeat from './heats/mouseMove'
import tickHeat from './heats/tick'

const store = createStore(reducer, initialState)

subscribe(store, [resizeHeat, mouseMoveHeat, tickHeat])

App.removeProps('dispatch')
  .map(withStore(store))
  .fork(AppComponent => render(<AppComponent />, document.getElementById('root')))
