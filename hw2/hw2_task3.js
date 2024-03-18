'use strict';
let a = +prompt("Введите a");
let b = +prompt("Введите b");
if (a >= 0 && b >= 0) {
    console.log(a - b)
}
else if (a < 0 && b < 0) {
    console.log(a * b)
}
else if (a >= 0 || b >= 0) {
    console.log(a + b)
}