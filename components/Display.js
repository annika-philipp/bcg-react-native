import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions 
  } from 'react-native'
import { connect } from 'react-redux'
  

const SCREEN_WIDTH = Dimensions.get('window').width  

class Display extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gamePlaying: true
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.score}>
          score:
        </Text>
        <TouchableOpacity style={styles.displayContainer}>
          <Text style={styles.questionText}>First day of bootcamp and you feel...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Excited</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Bootcamp, I did not sign up for this!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  score: {
    fontWeight: 'bold', // fontWeight can't go over 900
    fontSize: 30
  },
  displayContainer: {
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
  questionText: {
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

function mapStateToProps (state) {
  return {
    questions: state.questions,
    index: state.index,
    score: state.score
  }
}

export default connect(mapStateToProps)(Display)
