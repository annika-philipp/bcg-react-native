import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
  } from 'react-native'
import { connect } from 'react-redux'
import {navigate} from '../redux/actions/navigate'

const SCREEN_WIDTH = Dimensions.get('window').width  

export const Welcome = (props) => {
    return (
      <View style={styles.container}> 
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Hello! You're here! Click this button!</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => props.dispatch(navigate('display'))}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  welcomeContainer: {
    backgroundColor: '#374443',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
    height: 150,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 10
  },
  welcomeText: {
    textAlign: 'center',
    fontWeight: '800',
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: '#bfbab3',
    width: SCREEN_WIDTH * 0.9,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700'
  }
})

export default connect()(Welcome)