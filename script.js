"use strict";


//без инкапсуляции
/* function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
    };
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.age);

ivan.age = 30;
ivan. name = "Alex";

ivan.say(); */



//с инкапсуляцией
/* function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    };
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.setAge(300);
ivan. name = "Alex";
console.log(ivan.getAge());

ivan.say(); */

//инкапсуляция в классах
/* class User {
    constructor (name, age) {
        this.name = name;
        this._age = age;
    }
    
    say() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);

ivan.say(); */

//практика
class User {
    constructor (name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Karpukhov'; //скрытое свойство вне конструктора
    
    say() {
        console.log(`Имя пользователя: ${this.name}, ${this.#surname}, возраст: ${this._age}`);
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        if(typeof surname === 'string') {
            this.#surname;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const evg = new User('Evgeniy', 36);
console.log(evg.surname);

evg.surname = 'Popov';
console.log(evg.surname);

evg.name = 'Alex';
console.log(evg.name);

evg.age = 25;
console.log(evg.age);

evg.say();