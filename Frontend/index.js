let curPoints = localStorage.getItem('points')
let body = null
let score = null
const textStart = 'Start Game'
const textFetch = 'Click'
const textRestart = 'Restart Game'
const textScore = 'Your points: '

// If curPoints are null, initialize points with 20 points
if (curPoints === null) {
  curPoints = 20
  localStorage.setItem('points', curPoints)
}

// Create start button with listener -> add fetch button with listener
const initializeGame = () => {
  const startBtn = createButton(textStart)

  startBtn.addEventListener('click', () => {
    body.removeChild(startBtn)

    const fetchBtn = createButton(textFetch)

    fetchBtn.addEventListener('click', () => {
      fetch('http://localhost:8080/increment').then(data => data.json()).then(data => checkFetchedPoints(data))
    })
  })
}

// Create button with name
const createButton = (name) => {
  const button = document.createElement('button')
  button.innerHTML = name
  body.appendChild(button)
  return button
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

// Create restart button
const gameOver = () => {
  const fetchBtn = document.querySelector('button')
  body.removeChild(fetchBtn)

  const restartBtn = createButton(textRestart)

  restartBtn.addEventListener('click', () => {
    body.removeChild(restartBtn)

    initializeGame()
  })
}

// Check how many points received and how many needed for next reward
const checkFetchedPoints = (data) => {
  usePoints()
  const receivedPoints = data.pointsWon
  const pressesForNextWin = data.neededPressesForWin

  console.log(`Received points: ${receivedPoints}`)
  console.log(`Presses needed for next win: ${pressesForNextWin}`)

  getPoints(receivedPoints)

  if (curPoints === 0) {
    gameOver()
  }
}

// Add button listener for fetching
window.addEventListener('load', () => {
  body = document.querySelector('body')
  score = document.querySelector('#score')

  initializeGame()
})
