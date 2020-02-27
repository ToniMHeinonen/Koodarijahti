import React from 'react';
import Grid from '@material-ui/core/Grid';
import {HeaderBg, BottomBg, MyButton} from './MyStyles.js'

const URL = 'https://tranquil-depths-95164.herokuapp.com/'  // Heroku backend
// const URL = 'http://localhost:8080' // Local backend
const gameOverText = 'GAME OVER'
const welcomeText = 'Welcome!'

class App extends React.Component {

  /**
   * Creates an instance of App.
   * 
   * @constructor
   * @author: Toni Heinonen
   */
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

    this.state = {receivedPoints: '', fetching: false}
  }

  /**
   * Fetches data and updates score.
   */
  async fetchData() {
    this.setState({fetching: true})
    const data = await fetch(URL + '/increment', {method: 'POST'}).then(data => data.json())
    const str = `You received ${data.pointsWon} points,
                clicks needed for next win: ${data.neededPressesForWin}`
    this.updateScore(data.pointsWon)
    this.setState({receivedPoints: str, fetching: false})
  }

  /**
   * Sets game over to true and updates header text.
   * 
   * @param {string} text to set on header
   */
  pointsAtZero(text) {
    this.gameOver = true
    this.headerText = text
  }

  /**
   * Start game with 20 points.
   */
  startGame() {
    this.curPoints = 20
    localStorage.setItem('points', this.curPoints)
    this.gameOver = false
    this.setState({receivedPoints: ''})
  }

  /**
   * Updates score when fetching points from backend.
   * 
   * @param {Number} pointsWon points to add to score
   */
  updateScore(pointsWon) {
    this.curPoints--              // Decrease 1 point for fetching
    this.curPoints += pointsWon   // Add points won from fetch if any
    localStorage.setItem('points', this.curPoints)  // Update local storage

    if (this.curPoints === 0) {
      this.pointsAtZero(gameOverText)
    }
  }
  
  /**
   * Renders score, button and received points to UI.
   */
  render() {
    let score, btn, receivedPoints

    if (!this.gameOver) {
      // If points more than 0, render click me button and show score
      score = <HeaderBg>Your score: {this.curPoints}</HeaderBg>

      // If fetching, disable button
      if (this.state.fetching)
        btn = <MyButton variant="contained" disabled onClick={this.fetchData}>Click me</MyButton>
      else
        btn = <MyButton variant="contained" onClick={this.fetchData}>Click me</MyButton>
    } else {
      // Else render Start Game button and show Game Over text
      score = <HeaderBg>{this.headerText}</HeaderBg>
      btn = <MyButton variant="contained" onClick={this.startGame}>Start Game</MyButton>
    }

    receivedPoints = <BottomBg>{this.state.receivedPoints}</BottomBg>
    
    return (<div>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                {score}{btn}{receivedPoints}
              </Grid>
            </div>)
  }
}

export default App;
