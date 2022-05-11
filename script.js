"use strict";

const user = {
    name: "Alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
Object.defineProperty(user, "birthday", {value: prompt('Date?'), enumerable: true, configurable: true});

Object.defineProperty(user, "showMyPublicData", {enumerable: false}); //скрыть метод в переборе
for (let key in user) {
    console.log(key);
}

//если понадобится свойство, которое нельзя удалить или изменить
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


console.log(Object.getOwnPropertyDescriptor(user, 'name'));

Object.defineProperty(user, "name", {writable: false});
Object.defineProperty(user, "gender", {value: 'male'});

console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

//редактировать несколько методов одновременно

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});