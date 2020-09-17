//---------SOUND---------
let sound = new Audio();
sound.src = 'music/hover__music.mp3';
const title = document.querySelector('.header__h1');

title.addEventListener('mouseover', function () {
    sound.play();
});

//-----------portfolio-------
let category = document.querySelector('.portfolio__select');
let items = document.querySelectorAll(".portfolio__item");
category.addEventListener('change', () => {
    items.forEach(function (item) {
        console.log(item.lastElementChild.lastElementChild);
        item.classList.add('deactive');
        if (item.lastElementChild.lastElementChild.textContent == category.value) {
            item.classList.remove('deactive');
        } else {
            if (category.value == 'All') {
                item.classList.remove('deactive');
            }
        }
    })
});


