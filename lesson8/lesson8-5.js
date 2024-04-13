'use strict'
class User { 
    constructor(username){
        this.username = username;
        this.buttonElement = document.querySelector('button');
        this.buttonElement.addEventListener('click', this.showUsername.bind(this)); // привязываем showUsername к данному this так как он указывает на объект класса User
                                                                                    // иначе при создании функции несмотря на то, что она находится внутри класса this
                                                                                    // внутри нее будет указывать на тот объект, который ее вызвал, то есть button
    }

    showUsername(event) { // получаем объект события в функцию
        alert(this.username)
        // мы также можем получать объект события
        console.log(event)
    }

}

const user1 = new User('Alex');