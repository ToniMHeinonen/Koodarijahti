let curPoints = localStorage.getItem('points')

// If curPoints are null, initialize points with 20 points
if (curPoints === null) {
  curPoints = 20
  localStorage.setItem('points', curPoints)
}

// Use 1 point when clicking the button
const usePoints = () => {
  curPoints--
  localStorage.setItem('points', curPoints)
}

// Get rewards at certain thresholds when clicking the button
const getPoints = (amount) => {
  if (amount !== 0) {
    curPoints += amount
    localStorage.setItem('points', curPoints)
  }
}

// Check how many points received and how many needed for next reward
const checkFetchedPoints = (data) => {
  usePoints()
  const receivedPoints = data.pointsWon
  const pressesForNextWin = data.neededPressesForWin

  console.log(`Received points: ${receivedPoints}`)
  console.log(`Presses needed for next win: ${pressesForNextWin}`)

  getPoints(receivedPoints)
}

// Add button listener for fetching
window.addEventListener('load', () => {
  const fetchBtn = document.querySelector('#fetch')

  fetchBtn.addEventListener('click', () => {
    fetch('http://localhost:8080/increment').then(data => data.json()).then(data => checkFetchedPoints(data))
  })
})
