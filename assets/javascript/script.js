"use strict";

const password = document.querySelector('#password');
const checkMe = document.querySelector('#check-me');

checkMe.addEventListener('change', function() {
    if (checkMe.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});





