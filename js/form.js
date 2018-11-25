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

       /** var formData = {
            name: orderForm.elements.name,
            phone: orderForm.elements.phone,
            comment: orderForm.elements.comment
        };**/

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(formData));

       /** console.log(orderForm.elements.name.value);
        console.log(orderForm.elements.phone.value);
        console.log(orderForm.elements.street.value);
        console.log(orderForm.elements.home.value);
        console.log(orderForm.elements.housing.value);
        console.log(orderForm.elements.apartment.value);
        console.log(orderForm.elements.floor.value);
        console.log(orderForm.elements.comment.value);
        if (orderForm.elements.radioBtn.value == true) {
            console.log('Потребуется сдача');
        } else {
            console.log('Оплата по карте');
        }
        if (orderForm.elements.call.checked == true) {
            console.log('Не перезванивать');
        } else {
            console.log('Перезвонить');
        }**/
        }
     
})