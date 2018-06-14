import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions 
  } from 'react-native'
import { connect } from 'react-redux'
import {addScoreApi, reset} from '../redux/actions/score'
import {navigate} from '../redux/actions/navigate'

const SCREEN_WIDTH = Dimensions.get('window').width

class AddScore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      score: props.score.totalScore
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.addScore = this.addScore.bind(this)
    this.playAgain = this.playAgain.bind(this)
  }

  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // addScore(e) {
  //   e.preventDefault()
  //   this.props.dispatch(this.addScoreApi(this.state))
  // }

  playAgain() {
    this.props.dispatch(reset())
    this.props.dispatch(navigate('welcome'))
  }

  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.addscoreContainer}>
          <Text style={styles.addscoreText}>Well done!</Text>
          <Text style={styles.addscoreText}>Deploy yourself into phase 3</Text>
          <Text style={styles.highscoreText}>Your totalscore is: {this.props.score.totalScore}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.playAgain}>
          <Text style={styles.buttonText}>Play again</Text>
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
  addscoreContainer: {
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
  addscoreText: {
    textAlign: 'center',
    fontWeight: '800',
    color: 'white'
  },
  highscoreText: {
    textAlign: 'center',
    fontWeight: '600',
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
    score: state.score
  }

}

export default connect(mapStateToProps)(AddScore)