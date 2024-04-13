'use strict'
let user = {
    userName: 'Alex',

    sayHelllo() {
        console.log(this);
        console.log(this.userName)
    }
};

let newSayHello = user.sayHelllo.bind(user);    //setTimeout - метод объекта window, поэтому если мы просто вызовем метод sayHello в this функции прилетит ссылка на объект window а не на user
setTimeout(newSayHello, 3000);                  //bind создает новую функцию, только this'ом у нее является то, что мы укажем в скобках, поэтому там будет нужный нам user и его признаки и методы