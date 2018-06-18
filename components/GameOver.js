import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions 
  } from 'react-native'
import { connect } from 'react-redux'
import {reset} from '../redux/actions/score'
import {navigate} from '../redux/actions/navigate'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

function GameOver (props) {
  function playAgain () {
    props.dispatch(reset())
    props.dispatch(navigate('welcome'))
  }

  return (
    <View style={styles.container}> 
      <View style={styles.gameoverContainer}>
        <Text style={styles.gameoverText}>GAME OVER</Text>
        <Text style={styles.gameoverText}>Consult your nearest handbook...</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={playAgain}>
        <Text style={styles.buttonText}>Play again</Text>
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
  gameoverContainer: {
    backgroundColor: '#374443',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 10
  },
  gameoverText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 30,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonContainer: {
    backgroundColor: '#bfbab3',
    display: 'flex',
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginTop: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#374443'
  }
})

export default connect()(GameOver)