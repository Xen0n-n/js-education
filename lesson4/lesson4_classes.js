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

const person1 = new Person("Denis", 25, "male");
console.log(person1.age);
person1.incrementAge();
console.log(person1.age);