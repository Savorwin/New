"use strict";

function fib(num) {
    if(typeof(num) !== "number" || num < 0 || num !== Math.round(num)) {
        return "";
    }

    let str = "";
    let first = 0;
    let second = 1;

    for(let i = 0; i < num; i++) {
        if (i + 1 === num) {
            str += `${first}`;
        } else {
            str += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return str;
}

console.log(fib(5));



//0 + 1 = 1, 
//1 + 1 = 2,
//1 + 2 = 3.

