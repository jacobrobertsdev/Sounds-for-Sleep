// Variables
const allAudioElements = document.querySelectorAll("audio");
const rainPlayBtn = document.querySelector(".rain-play");
const whiteNoisePlayBtn = document.querySelector(".white-noise-play");
const firePlayBtn = document.querySelector(".fire-play");
const rainPauseBtn = document.querySelector(".rain-pause");
const whiteNoisePauseBtn = document.querySelector(".white-noise-pause");
const firePauseBtn = document.querySelector(".fire-pause");
const rainAudio = document.querySelector(".rain-audio");
const whiteNoiseAudio = document.querySelector(".white-noise-audio");
const fireAudio = document.querySelector(".fire-audio");
const rainVolume = document.querySelector(".rain-volume");
const whiteNoisevolume = document.querySelector(".white-noise-volume");
const firevolume = document.querySelector(".fire-volume");
const rainIcon = document.querySelector(".rain-icon");
const whiteNoiseIcon = document.querySelector(".white-noise-icon");
const fireIcon = document.querySelector(".fire-icon");

// Functions

// Play and active animation
function playAudio(player, playButton, pauseButton, icon) {
  player.play();

  icon.classList.add("animation");
  playButton.classList.add("playing");
  pauseButton.classList.remove("playing");
}

// Pause and remove animation
function pauseAudio(player, pauseButton, playButton, icon) {
  player.pause();

  pauseButton.classList.add("playing");
  icon.classList.remove("animation");
  playButton.classList.remove("playing");
}

// Loop audio playback
for (let i = 0; i < allAudioElements.length; i++) {
  allAudioElements[i].addEventListener("ended", function () {
    this.currentTime = 0;
    this.play();
  });
}

// Set  default volume on page-load
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < allAudioElements.length; i++) {
    allAudioElements[i].volume = 0.2;
  }
});

/// Event Listeners

/// Play
document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("rain-play")) {
    playAudio(rainAudio, rainPlayBtn, rainPauseBtn, rainIcon);
  } else if (target.classList.contains("white-noise-play")) {
    playAudio(
      whiteNoiseAudio,
      whiteNoisePlayBtn,
      whiteNoisePauseBtn,
      whiteNoiseIcon
    );
  } else if (target.classList.contains("fire-play")) {
    playAudio(fireAudio, firePlayBtn, firePauseBtn, fireIcon);
  }
});

///Pause
document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("rain-pause")) {
    pauseAudio(rainAudio, rainPauseBtn, rainPlayBtn, rainIcon);
  } else if (target.classList.contains("white-noise-pause")) {
    pauseAudio(
      whiteNoiseAudio,
      whiteNoisePauseBtn,
      whiteNoisePlayBtn,
      whiteNoiseIcon
    );
  } else if (target.classList.contains("fire-pause")) {
    pauseAudio(fireAudio, firePauseBtn, firePlayBtn, fireIcon);
  }
});


/// Volume Controls
document.addEventListener("input", (event) => {
  const target = event.target;

  if (target.classList.contains("rain-volume")) {
    rainAudio.volume = rainVolume.value;
  } else if (target.classList.contains("white-noise-volume")) {
    whiteNoiseAudio.volume = whiteNoisevolume.value;
  } else if (target.classList.contains("fire-volume")) {
    fireAudio.volume = firevolume.value;
  }
});
