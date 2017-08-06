import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { initialState, reducer } from './store'
import subscribe from 'redux-heat'
import resizeHeat from './heats/resize'
import App from './App'
import withStore from './helpers/withStore'

const store = createStore(reducer, initialState)

subscribe(store, [resizeHeat])

App.removeProps('dispatch')
  .map(withStore(store))
  .fork(AppComponent => render(<AppComponent />, document.getElementById('root')))
