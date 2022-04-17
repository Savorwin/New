"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let questionLastFilm_1 = prompt('Один из последних просмотренных фильмов', '');
let questionRating_1 = prompt('На сколько оцените его?', '');
let questionLastFilm_2 = prompt('Один из последних просмотренных фильмов', '');
let questionRating_2 = prompt('На сколько оцените его?', '');

let movies = {
    first1: questionLastFilm_1,
    rating1: questionRating_1,
    first2: questionLastFilm_2,
    rating2: questionRating_2,
};

console.log(personalMovieDB);
console.log(movies);