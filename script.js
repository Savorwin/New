"use strict";

const obj = {
    name: "Test",
};

let id = Symbol('id');
obj[id] = 1;

console.log(obj[id]);

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol('id')]: 123,
};

myAwesomeDB.id = '254151355';

console.log(myAwesomeDB['id']);
console.log(myAwesomeDB);
