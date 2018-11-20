var burger = document.querySelector('.main-nav__burger');
var menu = document.querySelector('.full-screen__menu');
var close = document.querySelector('.close-modal');

var clickBurgerHandler = function () {
    menu.classList.remove('hidden');
}

var clickCloseHandler = function () {
    menu.classList.add('hidden');
}

burger.addEventListener('click', function (evt) {
    evt.preventDefault();
    clickBurgerHandler();
})

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    clickCloseHandler();
})

