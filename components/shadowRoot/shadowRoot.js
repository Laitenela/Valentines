const app = document.getElementById('app');
const shadow = app.attachShadow({mode: "closed"});
const audioTrack = shadow.appendChild(document.createElement("audio"));
shadow.innerHTML = `<link rel="stylesheet" href="components/shadowRoot/shadowRoot.css">`;
audioTrack.src = "sounds/What_Is_Love_song.mp3";
audioTrack.playbackRate = 0.75;
audioTrack.volume = 0.4;

addEventListener("wheel", () => {
  audioTrack.play();
  if(!document.bodyClicked){
    alert("Кликни по экрану, а потом скролль");
    return;
  }
})

export default shadow;

import "shadowRoot.css";