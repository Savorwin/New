"use strict";

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(films) {
    return films.filter(film => film.rating >= 8);
}
console.log(showGoodFilms(films));

function showListOfFilms(films) {
    return films.reduce((film, current) => `${typeof(film) === 'object' ? film.name : film}, ${current.name}`);
}
console.log(showListOfFilms(films));

function setFilmsIds(films) {
    films.map(function(film, i){
        film.id = i;
        return film;
    });
}
const tranformedArray = setFilmsIds(films);

function checkFilms(tranformedArray) {
    return tranformedArray.every(film => film.id || film.id === 0);
}

checkFilms(tranformedArray);