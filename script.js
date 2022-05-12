"use strict";

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);

console.log(set);

//функция помощник

const arr2 = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique(arr2) {
    return Array.from(new Set(arr2));
}

console.log(unique(arr2));

