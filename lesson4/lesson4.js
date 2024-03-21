// пробуем в ооп
'use strict'


// конструктор
function User(username, age, language) {
    this.username = username;
    this.age = age;
    this.language = language;
}

let user2 = new User("vladoss", 25, "RU")

let user1 = {
    username: "Andrei",
    age: 22,
    language: "RU"
}


console.log(user1)
console.log(user2)