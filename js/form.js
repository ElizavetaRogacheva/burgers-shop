var orderForm = document.querySelector('#order-form');
var sendBtn = document.querySelector('#send-btn');


var validateForm = function (form) {
    var valid = true;

    if (!validateField(orderForm.elements.name)) {
        valid = false;
    }

    if (!validateField(orderForm.elements.phone)) {
        valid = true;
    }

    if (!validateField(orderForm.elements.comment)) {
        valid = true;
    }

    return valid;

}

var validateField = function (field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}


sendBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
     if (validateForm(orderForm)) {
        var formData = new FormData();
        formData.append("name", orderForm.elements.name.value);
        formData.append("phone", orderForm.elements.phone.value);
        formData.append("comment", orderForm.elements.comment.value);
        formData.append("to", "addres@addres");

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', () => {
            console.log(xhr.response);
        })
        }
     
})