import React from 'react'
import { View, Platform, Text } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../constants'

class MainScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'bcg-3000',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: <View><Text>I</Text></View>
  })

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd'}} >
      </View>
    )
  }
}

export default MainScreen