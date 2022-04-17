"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const questionLastFilm_1 = prompt('Один из последних просмотренных фильмов', '');
const questionRating_1 = prompt('На сколько оцените его?', '');
const questionLastFilm_2 = prompt('Один из последних просмотренных фильмов', '');
const questionRating_2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[questionLastFilm_1] = questionRating_1;
personalMovieDB.movies[questionLastFilm_2] = questionRating_2;

console.log(personalMovieDB);