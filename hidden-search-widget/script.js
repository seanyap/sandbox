const search = document.querySelector('.search')
const btn = document.querySelector('.btn')

let isActive = false

btn.addEventListener('click', () => {
  if (!isActive) {
    search.classList.add('active')
  } else {
    search.classList.remove('active')
  }
  isActive = !isActive
})
