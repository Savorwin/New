"use strict";

/* let user = {
    name: "Evg"
};

let map = new WeakMap();
map.set(user, "data");

user = null;

console.log(map.has()); */


// пример использования WeakMap

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: "Elena"};
let alex = {name: "Alex"};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

//WeakSet

let messages = [
    {text: "Hello", from: "John"},
    {text: "World", from: "Alex"},
    {text: "....", from: "M"},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

console.log(readMessages.has(messages[0]));