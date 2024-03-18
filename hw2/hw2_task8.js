'use strict'
function power(val, pow) {
    result = result * val;
    pow -= 1;
    if (pow > 1) {
        console.log(pow)
        return (power(val, pow));
    }
    else return result;
}

let val = 2;
let pow = 5
let result = val;
console.log(power(val, pow))