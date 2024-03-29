'use strict'
document.addEventListener('copy', function (event) {
    const copiedText = document.getSelection().toString();
    event.clipboardData.setData('text/plain', copiedText + "Текст скопирован с сайта edu.html")
    event.preventDefault();
});