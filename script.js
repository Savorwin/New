"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = "";
    arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из: ";

    arr.forEach(function (item) {
        str = str + `${item} `;
    });
    
    return str;
}
showFamily(family);


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
        arr.forEach(function (item) {
            return console.log(item.toLowerCase());
        });
}
standardizeStrings(favoriteCities);