"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}; 

showFirstMessage("Hello world");
console.log(num);


function calc(a, b) {
    return a + b;
};

console.log(calc(5, 4));
console.log(calc(6, 6));
console.log(calc(3, 7));

function ret() {
    let num = 50;
    return num;
};

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();


const calc1 = (a, b) => a + b;
calc1();