window.addEventListener('load', () => {
  const fetchBtn = document.querySelector('#fetch')

  fetchBtn.addEventListener('click', () => {
    fetch('http://localhost:8080/increment').then(data => data.json()).then(data => console.log(data))
  })
})
