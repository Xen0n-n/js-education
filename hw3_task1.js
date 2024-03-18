let list = []
let i = 0;
while (i <= 100) {
    list.push(i);
    i += 1;
}
console.log(list)

// работает но до 100
// for (i = 0; i <= 100; i++) {
//     if (list[i] % list[i] == 0 &&
//         list[i] % 2 !== 0 &&
//         list[i] % 3 !== 0 &&
//         list[i] % 5 !== 0 &&
//         list[i] % 7 !== 0) {
//             console.log(list[i])
//     }
// }

// работает но криво
// for (i = 0; i <= 100; i++) {
//     for (let j = 2; j < list[i]; j++) {
//         if (list[i] % j === 0) {
            // list.splice(list.indexOf(list[i]), 1) // удаляет элемент равный i      
//         }
//     }
// }

// работает адекватно
for (i = 0; i <= 100; i++) {
    let det = 0;
    for (let j = 2; j < list[i]; j++) {

        if (list[i] % j === 0) {
            det = 1;
        }
    }
    if (det === 0)
        console.log(list[i])
}



