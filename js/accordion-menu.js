var accordionMenuContent = document.querySelectorAll('.accordion-menu__item');
var accordionMenuBtn = document.querySelectorAll('.accordion-menu__btn');

for (var i = 0; i < accordionMenuBtn.length; i++) {
    for (var i = 0; i < accordionMenuContent.length; i++) {
        accordionMenuBtn[i].addEventListener('click', function (evt) {
            evt.preventDefault();
            for (var j = 0; j < accordionMenuContent.length; j++) {
                accordionMenuContent[j].classList.remove('active');
            }
            
            for (var i = 0; i < accordionMenuBtn.length; i++)
            {
                if (this == accordionMenuBtn[i])
                    accordionMenuContent[i].classList.add('active');
                
            }
        })
    }
}
