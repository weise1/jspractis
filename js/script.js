/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let count = 0;

// while (count < numberOfFilms) {
//     let film1 = prompt('Один из последних просмотренных фильмов?');
//     let film2 = prompt('Ha сколько оцените ego?');
//     personalMovieDB.movies[film1] = film2;
//     count++;
// }



   
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

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

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
   console.log('Просмотрено довольно мало фильмов');
} else if (10 >= personalMovieDB.count < 30) {
   console.log('Вы классический зритель');
} else {
   console.log('Произошла ошибка');
}
   






































