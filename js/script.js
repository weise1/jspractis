/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
   Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
   при помощи метода forEach вывести в консоль сообщения в таком виде:
   "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let numberOfFilms;

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: true,

   start: function() {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
   }
   },

   rememberMyFilms: function() {

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
   },

   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         console.log('Просмотрено довольно мало фильмов');
      } else if (10 >= personalMovieDB.count < 30) {
         console.log('Вы классический зритель');
      } else {
         console.log('Произошла ошибка');
      }
   },

   showMyDB: function (hidden) {
      if (!hidden) {
         return 'eror';
      }
   },

   writeYourGenres: function() {

      let str = ''


      for (let i = 1; i <= 3; i++) {

         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

         if(personalMovieDB.genres != null && personalMovieDB.genres != '') {

            continue

         } else {
            console.log('oshibka')
            i--;
         }

      }
      
      personalMovieDB.genres.forEach((genres, i) => {
         str += `Любимый жанр #${i + 1}) - это ${genres}\n`
      });
      

      return str
   },

   toggleVisibleMyDB: function(bool) {
      if (bool === true) {
         return personalMovieDB.privat = false
      } else {
         return personalMovieDB.privat = true
      }
   },



};

personalMovieDB.start()
personalMovieDB.rememberMyFilms()
console.log(personalMovieDB.writeYourGenres())




console.log(personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat))
console.log(personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat)))
console.log(personalMovieDB);










