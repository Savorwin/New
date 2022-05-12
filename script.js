"use strict";

const user = {
    name: "Alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

console.log(user);

//map

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50},
];

const map = new Map([
    [{paper: 400}, 8000]
]); // создание пустой карты

map.set(shops[0], 5000)
    .set(shops[1], 15000)
    .set(shops[2], 25000);

console.log(map);

//перебор map

//1
for (let shop of map.keys()) {
    console.log(shop);
}

const goods = [];
for(let shop of map.keys()){
    goods.push(Object.keys(shop)[0]);
}
console.log(goods);

//2
for (let price of map.values()) {
    console.log(price);
}

//3
for (let price of map.entries()) {
    console.log(price);
}

//4
map.forEach( (value, keys, map) => {
    console.log(value, keys);
});

//Создать map из объекта

const userMap = new Map(Object.entries(user));
console.log(userMap);

//Создать из map объект

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);