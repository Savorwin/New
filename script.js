"use strict";

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button')[1];

console.log(btns);

const circles = document.getElementsByClassName('circle');

console.log(circles);

//более современные методы

const hearts = document.querySelectorAll('.heart'); 

hearts.forEach(item => {
    console.log(item);
});

const buttonOne = document.querySelector('button');

console.log(buttonOne);