import React from 'react'
import { View, Platform } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../constants'
import { connect } from 'react-redux'

import Display from '../components/Display'
import Welcome from '../components/Welcome'


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
    console.log(this.props.location)
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd'}} >
        {this.props.location === 'welcome' ? <Welcome /> : <Display />}
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(MainScreen)