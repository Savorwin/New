"use strict";

/* new RegExp('patern', 'flags');
/pattern/flags */

/* const ans = prompt('Введите ваше имя', ''); */

/* const reg = /n/ig;

console.log(ans.search(reg));
console.log(ans.match(reg)); */

/* const pass = prompt('Password');

console.log(pass.replace(/./g, '*'));
console.log(pass.replace(/\./g, '*')); // экранирование через обратный слеш
 */

/* console.log('12-34-56'.replace(/-/g, ':')); */

/* const answer = prompt('Введите ваше имя');

const reg = /n/ig;

console.log(reg.test(answer)); */

/* const answer = prompt('Введите число:');
const reg = /\d/g;
let x = answer.match(reg);
console.log(x); */

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));