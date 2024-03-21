'use strict'
const post_parent = {
    role: 'user',
    userName: null,
    showRole: function() {
        console.log(this.role);
    }
};


//создание пустого объекта с прототипом post_parent
let post_child = Object.create(post_parent);
post1_child.userName = "Alex";