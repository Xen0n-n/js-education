'use strict';
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return arg1 + arg2;
            break;
        case "-":
            return arg1 - arg2;
            break;
        case "*":
            return arg1 * arg2;
            break;
        case "/":
            return arg1 / arg2;
            break;
    }
}
let arg1 = 10;
let arg2 = 5;

console.log(mathOperation(arg1, arg2, "*"))