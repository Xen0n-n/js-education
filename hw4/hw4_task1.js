'use strict'
function number_parser(number) {
        if (number > 999) {
        console.log("Введенное число больше 999!")
        return {}
    }
    let num_obj = {
        hundreds: Math.floor(number / 100),
        tens: Math.floor((number % 100) / 10),
        edinicy: ((number % 100) % 10)
    }
    return num_obj
}




let number = prompt("Введи число")

console.log(number_parser(number))