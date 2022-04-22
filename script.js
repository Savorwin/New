"use strict";

const arr = [1, 2, 23, 16, 18];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

for (let value of arr) {
    console.log(value);
}

console.log(arr.length);

arr[99] = 0;
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt('', '');
const products = str.split(', ');
console.log(products.join('; '));