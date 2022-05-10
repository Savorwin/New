"use strict";

const box = document.querySelector('.box');

const newHeight = 200;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h}px`;
    elem.style.width = `${w}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

