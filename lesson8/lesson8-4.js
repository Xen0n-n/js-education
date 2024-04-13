'use strict'
const button = document.querySelector('button');
button.addEventListener('click', function(){
    console.log(this);                      // this в данном случае указывает на button
})



// button.addEventListener('click', () => { // стрелочная анонимная функция
//     console.log(this);                   // this в данном случае указывает на window
// })