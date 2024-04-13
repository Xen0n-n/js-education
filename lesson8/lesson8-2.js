'use strict'
function addInfo(age, position) {
    this.age = age;
    this.position = position;
}

let user1 = {
    userName: 'Alex'
};

addInfo.call(user1, '30', 'developer');
// addInfo.apply(user1, ['30', 'developer']); // еще один способ. работает также, как и call, но аргументы передаются после объекта в виде массива
console.log(user1);