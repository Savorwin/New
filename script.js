"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

    function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt('Один из последних просмотренных фильмов', '');
            let rating = prompt('На сколько оцените его?', '');
            if (lastFilm != "" && rating != "" && lastFilm != null && rating != null && lastFilm.length < 50) {  
                personalMovieDB.movies[lastFilm] = rating;
                console.log('done');
                } else i--;        
    }
} 

    rememberMyFilms();

    function detectedPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 31) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    }

    detectedPersonalLevel();

    function showMyDB(hidden) {
        if (hidden === "false") {
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
       for (let i = 0; i <= 2; i++) {
            let yourGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
            personalMovieDB.genres[i] = yourGenres;
        }
    }

    writeYourGenres();

    console.log(personalMovieDB);