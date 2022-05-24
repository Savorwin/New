"use strict";

//filter

const names = [
    'Ivan',
    'Dmitry',
    'Ksenia',
    'Ann',
    'Voldemart'
];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);

//map

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => {
    return item.toLowerCase();
});

console.log(result);

//every/some

const someTest = [4, 'twet', 'hdfhdfh'];

console.log(someTest.some(item => typeof(item) === 'number'));

const num = [4, 5, 7];

console.log(num.every(item => typeof(item) === 'number'));

//reduce

/* const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current);

console.log(res); */

const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(res);

//пример использования

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj) // вернулся массив
.filter(item => item[1] === 'persone')
.map(item => item[0]); 

console.log(newArr);