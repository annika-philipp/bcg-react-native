import React from 'react'
import { View, Platform } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../constants'

class MainScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'bcg-3000',
    headerStyle: {
      height: Platform.OS === 'android' ? 24 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#ed961c'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white',
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  })

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd'}} >
      </View>
    )
  }
}

export default MainScreen