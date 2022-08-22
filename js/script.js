/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
   }
}

start();


const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


function rememberMyFilms () {
   for (let i = 0; i < numberOfFilms; i++) {
      const a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('Ha сколько оцените ego?');
   
   
      if(a != '' && b != '' && a != null && b != null && a.length < 10) {
         personalMovieDB.movies[a] = b;
      } else {
         console.log('Ошибка');
         i--;
      }
   }
}

rememberMyFilms();


function detectPersonalLevel () {
   if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
   } else if (10 >= personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else {
      console.log('Произошла ошибка');
   }
}

detectPersonalLevel();


function showMyDB (hidden) {
   if (!hidden) {
      console.log('Eror');
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
   for (i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
   console.log(personalMovieDB);
}

writeYourGenres();


