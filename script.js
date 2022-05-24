"use strict";

let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned the room');
    });
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' remove garbage');
    });
};

let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' won icecream');
    });
};

/* cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIcecream(result);
}).then(function(result) {
    console.log('Finished ' + result);
}); */

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log('all finished');
});

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
    console.log('one of them is finished');
});