'use strict'
function number_parser(number) {
    let num_obj = {
        hundreds: Math.floor(number / 100),
        tens: Math.floor((number % 100) / 10),
        edinicy: ((number % 100) % 10)
    }
    return num_obj
}

let number = prompt("Введи число")

console.log(number_parser(number))