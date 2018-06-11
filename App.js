import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import store from './store'
import MainScreen from './screens/MainScreen'

// import {createStore, applyMiddleware, compose} from 'redux'
// import thunkMiddleware from 'redux-thunk'


export default class App extends React.Component {
  render () {
    const MainNavigator = createStackNavigator ({
      Main: { screen: MainScreen }
    })



    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}
