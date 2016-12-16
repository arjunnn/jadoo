function onLoad(arg) {
    document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
  });
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // document.getElementById('monitor').webkitRequestFullscreen();

    function launchIntoFullscreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    launchIntoFullscreen(document.documentElement);
  }
  document.querySelector('#monitor').style.backgroundColor="#161913";
  const nodisplays = document.querySelectorAll('.nodisplay');
  nodisplays.forEach(nodisplay => nodisplay.classList.remove('nodisplay'));

  document.querySelector('.enter-text').classList.add('nodisplay');
  document.querySelector('.background-image').classList.add('nodisplay');

  const promptKey = document.querySelector('.prompt-key');
  promptKey.innerHTML = "B C F E";
  promptKey.innerHTML += "\tB C E D";
  promptKey.innerHTML += "\tB C F E D C";
}
