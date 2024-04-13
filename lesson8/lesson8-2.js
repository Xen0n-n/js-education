'use strict'
function addInfo(age, position) {
    this.age = age;
    this.position = position;
}

let user1 = {
    userName: 'Alex'
};

addInfo.call(user1, '30', 'developer');
console.log(user1);