const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
    isPlaying = !isPlaying;
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseButton.textContent = 'Play';
    isPlaying = false;
});

audio.addEventListener('ended', () => {
    playPauseButton.textContent = 'Play';
    isPlaying = false;
});
