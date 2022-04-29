"use strict";

function factorial(f) {

    if (typeof(f) !== "number" || !Number.isInteger(f) || f <= 0) {
        return console.log("Ошибка ввода данных, повторите ввод");
    }

    if (f === 1) {
        return 1;
    } else 
        for (let i = 1; i < f; i++) {
            return f * factorial(f - i);
    }
}


console.log(factorial(5));