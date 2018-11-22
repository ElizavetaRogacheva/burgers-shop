var compositionBtn = document.querySelector('.composition');
var compositionList = document.querySelector('.composition__details');
var close = document.querySelector('.close-details');


var compositionBtnClickHandler = function () {
    compositionList.classList.toggle('hidden');
}

var closeClickHandler = function () {
    compositionList.classList.add('hidden');
}

compositionBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    compositionBtnClickHandler();
})

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeClickHandler();
})