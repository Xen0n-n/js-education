'use strict';

function showName() {
    console.log(this); // this стал ссылкой на объект user1 
    alert(this.userName)
}

const user1 = {
    userName: 'Alex'
};

const user2 = {
    username: 'John'
};


showName.call(user1); // при вызове call в функцию в качестве this передается то, что находится в скобках