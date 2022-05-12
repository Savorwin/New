"use strict";

const user = {
    name: "Alex",
    surname: "Smith",
    birthday: "20/04/1993",
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

for (let key in user) {
    console.log(user[key]);
}

const arr = ['a', 'b', 'c'];

for (let key in arr) {
    console.log(arr[key]);
}

const str = "string";

for (let key in str) {
    console.log(str[key]);
}

// for...of

const arr2 = ['a', 'b', 'c'];

for (let key of arr2) {
    console.log(key);
}

const str2 = "string";

for (let key of str2) {
    console.log(key);
}


//перебор объекта с помощью for...of
const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    },
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }
        }
    }
}

for (let res of salaries) {
    console.log(res);
}