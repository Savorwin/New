
//способы экспорта

//1
export let one = 1;

//2 (именованные)
let two = 2;
export {two};

//3 (экспорт функций)
export function sayHi() {
    console.log('Hello!');
}