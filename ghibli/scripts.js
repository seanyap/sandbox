const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = './logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // var obj = JSON.parse(data)
    // data is the array of object
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.append(card)

      card.append(h1)
      card.append(p)
    })
  })
  .catch((err) => {})