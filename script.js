let sound = new Audio();
sound.src = 'music/hover__music.mp3';
const title = document.querySelector('.header__h1');

title.addEventListener('mouseover', function () {
    sound.play();
});