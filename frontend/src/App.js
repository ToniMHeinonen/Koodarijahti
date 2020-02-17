import React from 'react';
import Button from '@material-ui/core/Button';

class App extends React.Component {

  constructor() {
    super()
    this.state = {'score': 0}
    this.fetchData = this.fetchData.bind(this)
  }

  /* Fetch data and update score */
  async fetchData() {
    console.log('fetchData')
    const data = await fetch('http://localhost:8080/increment').then(data => data.json())
    const str = `You received ${data.pointsWon} points,
                clicks needed for next win ${data.neededPressesForWin}`
    this.setState({'score': str})
  }
  
  render() {
    const btn = <Button variant="contained" onClick={this.fetchData}>Click me</Button>
    const score = <p>{this.state.score}</p>
    return (<div>{btn}{score}</div>)
  }
}

export default App;
