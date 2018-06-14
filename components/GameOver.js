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
    height: 150,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 10
  },
  gameoverText: {
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

export default connect()(GameOver)