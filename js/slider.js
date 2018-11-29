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

$('.slider__list').slick({
    prevArrow: '<a href="#" class="slide__arrow slide__arrow--prev"><svg class="slide__arrow-img" width = "27px" height="13px" fill = "#fff"><use xlink:href = "img/svg/sprite.svg#arrow-scroll"></use></svg></a>',
	nextArrow: '<a href="#" class="slide__arrow slide__arrow--next"><svg class="slide__arrow-img" width = "27px" height="13px" fill = "#fff"><use xlink:href = "img/svg/sprite.svg#arrow-scroll"></use></svg></a>',
});


$('#fullpage').fullpage({});