var teamMemberBtn = document.querySelectorAll('.team__member');
var teamMemberContent = document.querySelectorAll('.team__member-info');

for (var i = 0; i < teamMemberBtn.length; i++) {
    teamMemberBtn[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        if(!(this.classList.contains('active'))) {
            for (var i = 0; i < teamMemberBtn.length; i++) {
                teamMemberBtn[i].classList.remove('active');
            } 
            this.classList.add('active');
        } 
    })
}