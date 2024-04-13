'use strict'
class Hello {
    button = document.querySelector('button')
    constructor() {
        this.button.addEventListener('click', this.buttonClickhandler)
    }

    buttonClickhandler = (event) => {
        // теперь в функции this всегда будет
        // указывать на сам объект, 
        // а не на кнопку        

        console.log(this);
    }

}