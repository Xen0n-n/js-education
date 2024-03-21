// СТАНДАРТ ДЛЯ ЛЮДЕЙ ES6 

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    incrementAge() {
        this.age += 1;
    }
}


class Person_extended extends Person {
    constructor(name, age, gender, location, hobby) {
        super(name, age, gender);
        this.location = location;
        this.hobby = hobby;
    }

    SayName() {
        console.log(`My name is ${this.name}`);
    }
}


const person1 = new Person("Denis", 25, "male");
console.log(person1.age);




const person2 = new Person_extended("Andrey", 22, "male", "Moscow", "bananas")
person2.SayName();



