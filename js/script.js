/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let count = 0;

while (count < numberOfFilms) {
    let film1 = prompt('Один из последних просмотренных фильмов?');
    let film2 = prompt('Ha сколько оцените ego?');
    personalMovieDB.movies[film1] = film2;
    count++;
}

console.log(personalMovieDB);


//Operators


if (4 == 4) {
    console.log('ok');
}

const num = 50;

if (num < 49) {
    console.log('eroe');
} else if (num > 100) {
    console.log('Mnogo');
} else {
    console.log('ok');
}


// Тернарный оператор 

// (num === 50) ? console.log('ok') : console.log('eroe');


//Унарный +

console.log(typeof(+'4')); // number

//Swith


switch (num) {
    case 49:
        console.log('Nevrno');
        break;
    case 100:
        console.log('Neverno');
        break;
    case 50:
        console.log('okey');
        break;
    default: 
        console.log('Ne v etot');
        break;
}



























