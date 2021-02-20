const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement("button")

  btn.addEventListener('click', () => {
    document.getElementById(sound).play();
  })
  btn.innerHTML = sound
  
  document.getElementById('buttons').appendChild(btn)
})