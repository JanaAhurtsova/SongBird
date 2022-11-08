import birdsData from "./birds.js";
import num from "./game.js";

const playNum = Math.floor(Math.random() * 6);
const play = document.querySelector(".play");
const seekBar = document.querySelector(".seekbar");
const timer = document.querySelector(".timer");
const duration = document.querySelector(".duration");
const fillBar = document.querySelector(".fill");
const volumeIcon = document.querySelector(".volume__icon");
const currentVolume = document.querySelector(".volume");
let isPlay = false;

const audio = new Audio();
audio.src = birdsData[num][playNum].audio;
audio.currentTime = 0;

const playAudio = () => {
  if (!isPlay) {
    audio.play();
    play.classList.add("pause");
    isPlay = true;
  } else {
    audio.pause();
    play.classList.remove("pause");
    isPlay = false;
  }
}

function updateProgress() {
  fillBar.max = audio.duration;
  fillBar.value = audio.currentTime;
  if (audio.duration) {
    const position = audio.currentTime / audio.duration;
    fillBar.style.width = position * 100 + "%";
    timer.innerHTML = formatTime(Math.floor(audio.currentTime));
    duration.innerHTML = formatTime(Math.floor(audio.duration));
  }
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  return `${min}:${sec}`;
}

function muteSound() {
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeIcon.classList.add("mute__icon");
    currentVolume.value = 0;
  } else {
    volumeIcon.classList.remove("mute__icon");
    currentVolume.value = 50;
  }
}

function changeVolume() {
  audio.volume = currentVolume.value / 100;
}

play.addEventListener("click", playAudio);
audio.addEventListener("ended", function () {
  play.classList.remove("pause");
  audio.currentTime = 0;
});
seekBar.addEventListener("click", (e) => {
  const progressWidth = seekBar.clientWidth;
  const clickedOffsetX = e.offsetX;

  audio.currentTime = (clickedOffsetX / progressWidth) * audio.duration;
  audio.play();
});
volumeIcon.addEventListener("click", muteSound);
currentVolume.addEventListener("input", changeVolume);
audio.addEventListener("timeupdate", updateProgress);



export { playNum, audio, play, duration };

