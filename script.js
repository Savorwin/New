"use strict";

const number = 1;

//анонимная самовызывающаяся функция
(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}()); 

console.log(number);

//использование объектного интерфейса

const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();