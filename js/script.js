"use sreict";

// function firstTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const arr = [3, 5, 8, 16, 20, 23, 50];
//    const result = [];
   
//    console.log(arr.length);

//    for (let i = 0; i < 7; i++) {
//       result[i] = arr[i];
//    }

//    console.log(result);

//    // Не трогаем
//    return result;
// }

// firstTask();



function secondTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   for (let i = 0; i < data.length; i++) {
      if (typeof(data[i]) === 'number') {
         data[i] = data[i] * 2;
      }
      else if (typeof(data[i]) === 'string') {
         data[i] = `${data[i]} - done`;
      }
   }
   console.log(data);
   // Не трогаем
   return data;
}

// secondTask();


function thirdTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   const newArr = data.reverse();  

   for (let i = 0 ; i < data.length; i++) {
      newArr[i] = result[i];
   }
   console.log(result);
   // Не трогаем
   return result;
}


thirdTask();
































