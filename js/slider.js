var compositionBtn = document.querySelector('.composition');
var compositionList = document.querySelector('.composition__details');

var compositionBtnClickHandler = function () {
    compositionList.classList.toggle('hidden');
}

compositionBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    compositionBtnClickHandler();
})