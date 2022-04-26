"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'), 
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = "blue";
box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "orange";
}

hearts.forEach(item => {
    item.style.backgroundColor = "yellow";
});

//Методы для работы с элементами страницы

const div = document.createElement('div');
div.classList('black');
//const text = document.createTextNode('Тут был я');

//document.body.append(div);

//document.querySelector('.wrapper').append(div);

//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);

//circles[0].remove();

//hearts[0].replaceWith(circles[0]);

div.innerHTML = "Hello world";
div.textContent = "Hello world";