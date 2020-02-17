import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

class App extends React.Component {

  constructor() {
    super()
    this.state = {'score': ''}
    this.fetchData = this.fetchData.bind(this)
  }

  /* Fetch data and update score */
  async fetchData() {
    console.log('fetchData')
    const data = await fetch('http://localhost:8080/increment').then(data => data.json())
    const str = `You received ${data.pointsWon} points,
                clicks needed for next win: ${data.neededPressesForWin}`
    this.setState({'score': str})
  }
  
  render() {
    const btn = <Button variant="contained" onClick={this.fetchData}>Click me</Button>
    const score = <MyP>{this.state.score}</MyP>
    return (<div>{btn}{score}</div>)
  }
}

export default App;
