"use strict";

//const now = new Date('2022-06-17');
//new Date.parse('2022-06-17');

/* console.log(now.getFullYear()); // получить год
console.log(now.getMonth()); // получить месяц
console.log(now.getDate()); // получить день
console.log(now.getHours()); // получить часы
console.log(now.getMinutes()); // получить минуты
console.log(now.getSeconds()); // получить секунды
console.log(now.getDay()); // получить день недели
console.log(now.getUTCHours()); // получить часы по UTC */

// установить время
//console.log(now.setHours(18)); // установить часы

let start = new Date();
for( let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);