"use strict";

const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length);

//console.log(btns[0].classList.item(0)); // получить класс под индексом

//console.log(btns[1].classList.add('red')); // добавить класс

//console.log(btns[0].classList.remove('blue')); // удалить класс

//console.log(btns[0].classList.toggle('blue')); // если класс есть, то будет убран, если нет, то добавлен

// проверить наличие класса на элементе

//if (btns[1].classList.contains('red')) {
//    console.log('red');
//}

//btns[0].addEventListener('click', () => {
//    if (!btns[1].classList.contains('red')) {
//        btns[1].classList.add('red');
//   } else {
//        btns[1].classList.remove('red');
//    }
//});

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});