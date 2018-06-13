import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

// import store from './store'
import MainScreen from './screens/MainScreen'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './redux/reducers'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware)
)) 

class App extends React.Component {
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

export default App
