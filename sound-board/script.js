const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// iterate through sounds 
sounds.forEach(sound => {
  // create a button 
  const btn = document.createElement("button")
  btn.classList.add('btn')
  
  btn.innerHTML = sound

  // add event listeners to call func to play sound when event happens
  btn.addEventListener('click', () => {
    // stop sound before playing next sound to avoid two or more sounds playing together at the same time
    stopSound()

    document.getElementById(sound).play();
  })
  
  document.getElementById('buttons').appendChild(btn)
})

function stopSound() {
  // iterate through sounds and stop sound
  sounds.forEach(sound => {
    const audio = document.getElementById(sound)
    
    audio.pause()
    audio.currentTime = 0
  })  
}