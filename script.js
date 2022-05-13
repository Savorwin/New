"use strict";

let btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation() {
    let elem = document.querySelector('.box');
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

/* btn.addEventListener('click', () => {
    timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
}); */

/* function logger () {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log("Text");
    i++;
} */

//рекурсивный вызов setTimeout

/* let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */

