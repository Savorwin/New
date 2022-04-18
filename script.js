"use strict";

if (0) {
    console.log('Ok!');
} else {
    console.log('Error');  
};

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('To much');
} else {
    console.log('Okey!');
}

(num == 50) ? console.log('Ok') : console.log('Error');

const num2 = 60;

switch (num2) {
    case 59: console.log('Не верно');
    break;
    case 61: console.log('Не верно');
    break;
    case 63: console.log('Верно');
    break;
    default: console.log('Не в этот раз');
    break;
};