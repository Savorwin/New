"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('Один из последних просмотренных фильмов', '');
    let rating = prompt('На сколько оцените его?', '');

    if (lastFilm != "" && rating != "" && lastFilm != null && rating != null && lastFilm.length < 50) {  
    personalMovieDB.movies[lastFilm] = rating;
    } 
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 31) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
        
console.log(personalMovieDB);


