const music = document.querySelector('#background-music');
const musicToggle = document.querySelector('#music-toggle');
const volumeSlider = document.querySelector('#music-volume');
const volumeValue = document.querySelector('#volume-value');
const musicStatus = document.querySelector('#music-status');
let userPaused = false;
let startingMusic = false;
music.volume = Number(volumeSlider.value) / 100;
function updateMusicState() {
 const playing = !music.paused;
 musicToggle.textContent = playing ? 'Ⅱ Pausar música' : '♫ Tocar música';
 musicToggle.setAttribute('aria-label', playing ? 'Pausar música' : 'Tocar música');
 musicToggle.setAttribute('aria-pressed', String(playing));
 musicStatus.textContent = playing ? 'Tocando em 8 bits' : 'Arranjo em 8 bits';
}
async function startMusic() {
 if (startingMusic || !music.paused) return;
 startingMusic = true;
 try { await music.play(); updateMusicState(); }
 catch { updateMusicState(); musicStatus.textContent = 'Clique em Tocar música'; }
 finally { startingMusic = false; }
}
musicToggle.addEventListener('click', async () => {
 if (!music.paused) { userPaused = true; music.pause(); }
 else { userPaused = false; await startMusic(); }
});
volumeSlider.addEventListener('input', () => {
 const value = Number(volumeSlider.value);
 music.volume = value / 100;
 volumeValue.textContent = `${value}%`;
 volumeSlider.setAttribute('aria-valuetext', `${value} por cento`);
});
music.addEventListener('play', updateMusicState);
music.addEventListener('pause', updateMusicState);
music.addEventListener('error', () => {musicStatus.textContent='Não foi possível carregar a música';});
// A primeira interação libera a reprodução em navegadores que bloqueiam autoplay.
function unlockMusic(event) {
 if (event.target.closest?.('#music-toggle') || userPaused || !music.paused) return;
 if (event.type === 'keydown' && !['Enter',' '].includes(event.key)) return;
 startMusic();
}
document.addEventListener('pointerdown', unlockMusic);
document.addEventListener('keydown', unlockMusic);
startMusic();
