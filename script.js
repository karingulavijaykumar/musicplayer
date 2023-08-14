// script.js
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const skipBtn = document.getElementById('skipBtn');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

skipBtn.addEventListener('click', () => {
    audio.currentTime += 10; // Skip 10 seconds
});

