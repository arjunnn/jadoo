function playAudio (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //exits the function altogether
  audio.currentTime = 0; //resets the playhead
  audio.play();
}
window.addEventListener('keydown', playAudio);
onLoad();
