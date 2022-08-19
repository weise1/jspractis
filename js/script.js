// Место для первой задачи
function sayHello(name) {
   return `Привет, ${name}`;
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
   return [number - 1, number, number + 1]
}

// Место для третьей задачи
function getMathResult(base, range) {

  if (base, range <= 0 || typeof(base, range) === 'string') {
     return base;
  }

  let str = '';

  if (base > 0 && range > 0) {

     for(let i = 1; i <= range; i++) {
        
        if (i === range) {
           str += `${base * i}`;
        } else {
           str += `${base * i}---`;
        }
        
     }

  }
return str;
}