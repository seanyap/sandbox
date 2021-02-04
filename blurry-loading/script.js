const text = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let count = 0

function load() {
  count++;
  text.textContent = `${count}%`  
  if (count < 100) {
    setTimeout(load, 30)
  }
  bg.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTimeout(load, 30)
