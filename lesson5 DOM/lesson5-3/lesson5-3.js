'use strict';

let button = document.querySelector('button');
console.log(button.classList);
console.log(button.className);

button.classList.add('warning');
button.classList.remove('btn');
button.classList.toggle('btn-large');
