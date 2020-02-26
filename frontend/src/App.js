import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Stylize background for text
const MyP = styled('p')({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  width: 200,
  padding: '0 30px',
});

const URL = 'http://localhost:8080'
const gameOverText = 'GAME OVER'
const welcomeText = 'Welcome to the Click Game'

class App extends React.Component {

  constructor() {
    super()

    // Bind functions to fix 'this' issues
    this.fetchData = this.fetchData.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.startGame = this.startGame.bind(this)
    this.pointsAtZero = this.pointsAtZero.bind(this)

    this.gameOver = false

    // Get saved points from local storage
    this.curPoints = localStorage.getItem('points')

    // If curPoints are null, initialize points with 20 points
    if (this.curPoints === null) {
      this.pointsAtZero(welcomeText)
    } else if (this.curPoints === '0') {
      this.pointsAtZero(gameOverText)
    }

    this.state = {receivedPoints: ''}
  }

  /* Fetch data and update score */
  async fetchData() {
    const data = await fetch(URL + '/increment', {method: 'POST'}).then(data => data.json())
    const str = `You received ${data.pointsWon} points,
                clicks needed for next win: ${data.neededPressesForWin}`
    this.updateScore(data.pointsWon)
    this.setState({receivedPoints: str})
  }

  /* Set game over to true and update header text */
  pointsAtZero(text) {
    this.gameOver = true
    this.headerText = text
  }

  /* Restart game with 20 points */
  startGame() {
    this.curPoints = 20
    localStorage.setItem('points', this.curPoints)
    this.gameOver = false
    this.setState({receivedPoints: ''})
  }

  /* Updates score when fetching points from backend */
  updateScore(pointsWon) {
    this.curPoints--              // Decrease 1 point for fetching
    this.curPoints += pointsWon   // Add points won from fetch if any
    localStorage.setItem('points', this.curPoints)  // Update local storage

    if (this.curPoints === 0) {
      this.pointsAtZero(gameOverText)
    }
  }
  
  /* Render score, button and received points to UI */
  render() {
    let score, btn, receivedPoints

    if (!this.gameOver) {
      score = <MyP>Your score: {this.curPoints}</MyP>
      btn = <Button variant="contained" onClick={this.fetchData}>Click me</Button>
    } else {
      score = <MyP>{this.headerText}</MyP>
      btn = <Button variant="contained" onClick={this.startGame}>Start Game</Button>
    }

    receivedPoints = <MyP>{this.state.receivedPoints}</MyP>
    
    return (<div>{score}{btn}{receivedPoints}</div>)
  }
}

export default App;
