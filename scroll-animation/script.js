const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// call checkBoxes function once when the page loads so the boxes are on the screen
checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 10 * 9

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}