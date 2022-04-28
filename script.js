"use strict";

//Обработчик через DOM дерево

const btn = document.querySelector('button');

btn.onclick = function() {
    alert('Click2');
};

// addEventListerner() - обработчик событий

btn.addEventListener('click', (event) => {
    console.log(event.target);
    console.log('Click');
});

//убрать стандартное поведение браузера

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});

