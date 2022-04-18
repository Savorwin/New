"use strict";

//const hamburger = 5;
//const fries = 0;
//
//if (hamburger && fries) {
//    console.log("Я сыт");
//};

//console.log(1 && 0);
//console.log(1 && 5);
//console.log(null && 5);
//console.log(0 && hdhjhj);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

console.log((hamburger === 3 && cola === 2 || fries === 3 && nuggets === 1));

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets === 1) {
    console.log("Все довольны");
} else {
    console.log("Мы уходим");
};



let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);

