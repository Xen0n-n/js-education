// РАБОЧИЙ ВАРИАНТ

'use strict'
class Hello {
    one = 'один';

    world = () => {
        // внутри стрелочных функций this
        // всегда будет указывать на созданный объект
        console.log(this.one);
    }
}


let hello1 = new Hello;
setTimeout(hello1.world, 2000)  // в данном случае сработает нормально, так как 
                                // так как стрелочная функция всегда подразумевает объект, в котором создана