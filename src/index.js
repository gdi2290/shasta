import { Component as ReactComponent, PropTypes as RPropTypes } from 'react'
import { Provider } from 'react-redux'
import IPropTypes from 'react-immutable-proptypes'
import bindClass from './lib/bindClass'
import connect from './lib/connect'
import createStore from './createStore'
import createActions from './lib/createActions'
import createReducer from './lib/createReducer'
import createReducerActions from './lib/createReducerActions'
import combineReducers from './lib/combineReducers'

class ShastaComponent extends ReactComponent {
  static defaultState = {};
  constructor() {
    super(...arguments)
    this.state = {
      ...this.constructor.defaultState,
      ...this.state
    }
    bindClass(this)
  }
}

const PropTypes = {
  ...RPropTypes,
  ...IPropTypes
}

export {
  ShastaComponent as Component,
  connect,
  PropTypes,
  Provider,
  combineReducers,
  createReducer,
  createReducerActions,
  createActions,
  createStore
}
