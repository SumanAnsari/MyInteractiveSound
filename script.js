let synth = new Tone.Synth().toMaster();

document.body.addEventListener('keypress', (event) => {
  if(event.key == 'a'){
    synth.triggerAttackRelease('C3', '4n')
    document.body.style.backgroundColor = "lightpink";
  }else if(event.key == 'b'){
    synth.triggerAttackRelease('C4', '4n')
    document.body.style.backgroundColor = "lightblue";
  }else if(event.key == 'c'){
    synth.triggerAttackRelease('C5', '4n')
    document.body.style.backgroundColor = "purple";
  }
})

let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mouseenter', () => {
  player.play();
})

interactable.addEventListener('mouseleave', () => {
  player.pause();
})

player.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
})

player.addEventListener('play', () => {
  document.body.style.backgroundColor = "black";
})

player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  if(player.currentTime > 2){
    interactable.style.borderRadius = "30px";
  }
})
