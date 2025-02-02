const soundSelect = document.getElementById("sound-select");
const volumeControl = document.getElementById("volume-control");
const toggleSoundBtn = document.getElementById("toggle-sound");

let audioPlayer = new Audio();
let isPlaying = false;

// Function to change the sound
function changeSound() {
  if (soundSelect.value) {
    audioPlayer.src = `sounds/${soundSelect.value}`;
    audioPlayer.loop = true;
    audioPlayer.volume = volumeControl.value;
    if (isPlaying) {
      audioPlayer.play();
    }
  } else {
    audioPlayer.pause();
    isPlaying = false;
    toggleSoundBtn.textContent = "Play";
  }
}

// Function to play/pause sound
function toggleSound() {
  if (soundSelect.value) {
    if (isPlaying) {
      audioPlayer.pause();
      toggleSoundBtn.textContent = "Play";
    } else {
      audioPlayer.play();
      toggleSoundBtn.textContent = "Pause";
    }
    isPlaying = !isPlaying;
  }
}

// Function to adjust volume
function adjustVolume() {
  audioPlayer.volume = volumeControl.value;
}

// Event Listeners
soundSelect.addEventListener("change", changeSound);
toggleSoundBtn.addEventListener("click", toggleSound);
volumeControl.addEventListener("input", adjustVolume);
