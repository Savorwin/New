"use strict";

const arr = [3, 5, 8, 16, 20, 23, 50];
let result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);


let data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === "number") {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === "string") {
        data[i] = data[i] + " - done";
    }
}

console.log(data);


const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];

for (let i = 0; i <= data1.length; i++) {
    result1[i - 1] = data1[data1.length - i]; 
}

console.log(result);

