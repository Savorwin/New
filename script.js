//"use strict";

// 1) Обычная функция: this = window, но в "use strict" this = undefined

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this)
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);

// 2) Контекст у методов объекта это сам объект

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};

obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello! " + this.name);
    };
}

let ivan = new User('Ivan', 28);

// 4) Ручное присвоение this (call, apply, bind)

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "John"
};

sayName.call(user, 'Smith'); // передаем контекст через метод call
sayName.apply(user, ['Smith']); // передаем контекст через метод apply

//Метод bind, он создает новую функцию, связанную с определенным контекстом

function count (num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));

//Применение контекста вызова this к обработчику событий

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgrounColor = "red";
});

// для стрелочной функции использовать event.target

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
   e.target.style.backgrounColor = "red";
});

const obj2 = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj2.sayNumber();

const double2 = (a) => {
    return a * 2;
};

