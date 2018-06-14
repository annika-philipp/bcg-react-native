import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions 
  } from 'react-native'
import { connect } from 'react-redux'
import {fetchQuestions, increaseIndex} from '../redux/actions/questions'
import {isTopScore, scoreIncreased, addToTotalscore, isPositiveTotalscore} from '../redux/actions/score'
import GameOver from './GameOver'  

const SCREEN_WIDTH = Dimensions.get('window').width  

class Display extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gamePlaying: true
    }
  }

  componentWillReceiveProps (nextProps) {
    var totalScoreCheck = nextProps.score.isPositiveTotalScore
    this.setState({
      gamePlaying: totalScoreCheck
    })
  }

  componentDidMount(){
    console.log("made it here")
    this.props.dispatch(fetchQuestions())
  }

  updateIndex (scoreValue) {
    if (this.props.index == this.props.questions.length - 1) {
      // this.props.dispatch(navigate('scoreboard'))
      this.props.dispatch(isTopScore(this.props.score.totalScore))
    }
    else {
      this.props.dispatch(scoreIncreased(scoreValue))
      this.props.dispatch(increaseIndex(this.props.index))
      this.props.dispatch(addToTotalscore(scoreValue))
      this.props.dispatch(isPositiveTotalscore())
    }
  }

  render () {
    var question = this.props.questions[this.props.index]
    return (
      <View>
      {this.state.gamePlaying 
      ?
      <View style={styles.container}>
        <Text style={styles.score}>
          score: {this.props.questions.length > 0 && this.props.score.totalScore}
        </Text>
        <View style={styles.displayContainer}>
          <Text style={styles.questionText}>{this.props.questions.length > 0 && question.question}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.updateIndex(question.scores[0])}>
          <Text style={styles.buttonText}>{this.props.questions.length > 0 && question.answers[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.updateIndex(question.scores[1])}>
          <Text style={styles.buttonText}>{this.props.questions.length > 0 && question.answers[1]}</Text>
        </TouchableOpacity>
      </View>
      : <GameOver />}
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
