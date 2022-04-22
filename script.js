"use strict";

function getTimeFromMinutes(timerMinutes) {
    if (timerMinutes < 0 || typeof(timerMinutes) !== "number" || timerMinutes !== Math.round(timerMinutes)) {
        return console.log("Ошибка, проверьте данные");
    }
    
    let hours = Math.floor(timerMinutes / 60);
    let minuts = timerMinutes % 60;
    let hoursStr = "";

    switch(hours) {
        case 0: 
            hoursStr = "часов";
            break;
        case 1: 
            hoursStr = "час";
            break;
        case 2: 
        case 3: 
        case 4: 
            hoursStr = "часа";
            break;
        default: 
            hoursStr = "часов";  
    }

    return console.log(`Это ${hours} ${hoursStr} и ${minuts} минут`);
}

getTimeFromMinutes(150);


function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== "number" || typeof(b) !== "number" || typeof(c) !== "number" || typeof(d) !== "number") {
        return 0;
    }

    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > a && c > b && c > d) {
        return c;
    } else return d;

}

console.log(findMaxNumber(11, 10, 7, 9));