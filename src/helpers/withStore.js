import React, { Component } from 'react'
import { setDisplayName, wrapDisplayName } from 'recompose'

export default ({ getState, subscribe, dispatch }) => Target =>
  setDisplayName(wrapDisplayName(Target, 'withStore'))(
    class WithStore extends Component {
      constructor() {
        super()

        this.state = {
          storeState: getState(),
        }

        subscribe(() =>
          this.setState({
            storeState: getState(),
          })
        )
      }

      render() {
        return <Target {...{ ...this.state.storeState, ...this.props }} dispatch={dispatch} />
      }
    }
  )
