
// Задание 1. Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// Массивы в JavaScript часто называют "неправильными" из-за того, что они отличаются от классических массивов в других языках программирования и фактически сочетают в себе свойства нескольких структур данных.
// Почему "неправильные"?
// Традиционные массивы (например, в C, C++, Java) обычно обладают следующими характеристиками:
// 1) Фиксированный размер: Размер задается при создании и не меняется.
// 2) Однородные типы:  Содержат элементы только одного типа данных.
// 3) Непрерывное хранение в памяти: Элементы расположены в памяти последовательно.


// Задание 1


// Задание 2. Привязать контекст к функции logger()

//Call
{
  function logger() {
    console.log(`output only external context: ${this.item}`);
  }

  const obj = { item: "some value" };

  logger.call(obj);
}
// Apply
{
  function logger() {
    console.log(`output only external context: ${this.item}`);
  }

  const obj = { item: "some value" };

  logger.apply(obj);
}

{
  function logger() {
    console.log(`output only external context: ${this.item}`);
  }

  const obj = { item: "some value" };

  const newLogger = logger.bind(obj);
  newLogger();
}

// 3.1 this:

const obj = {
  a: 1,
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
};

obj.e(); // undefined, здесь undefined т.к. в момент вызова самовызывающейся функции возвращает функцию, которая не является методом объекта в момент создания,
// а значит ссылается на глобальный объект window. В глобальном объекте window нет a, следовательно a = undefined, можно было бы исправить это добавив в начале var = a
//

obj.e.call({ a: 2 }); // undefined

// 3.2 this:
{
  const obj = {
    child: {
      i: 10,
      b: () => console.log(this.i, this),
      c() {
        console.log(this.i, this);
      },
    },
  };

  obj.child.b(); // undefined, window
  obj.child.c(); // 10, child{...}
}
//  3.3 this:
{
  function foo() {
    const x = 10;
    return {
      x: 20,
      bar: () => {
        console.log(this.x);
      },
      baz: function () {
        console.log(this.x);
      },
    };
  }

  const obj1 = foo();
  obj1.bar(); // ? undefined
  obj1.baz(); // ? 20

  const obj2 = foo.call({ x: 30 });

  let y = obj2.bar;
  let z = obj2.baz;
  y(); // ? 30
  z(); // ? undefined

  obj2.bar(); //  ? 30
  obj2.baz(); //  ? 20
}

// 4.1 Создайте массив чисел и найдите его сумму разными способами
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
// Споспоб 1
for (let i = 0; i < arr.length; i += 1) {
  sum += arr[i];
}
console.log(sum);
sum = 0;

// Способ 2
sum = arr.reduce((acc, el) => {
  acc += el;
  return acc;
}, sum);
console.log(sum);
sum = 0;

// Способ 3
let count = 0;
function sumArr(arr) {
  if (arr[arr.length - 1] === count) {
    return;
  }

  sum += arr[count];
  count++;
  sumArr(arr);
}
sumArr(arr);
console.log(sum);
sum = 0;

// Способ 4
arr.map((el) => (sum += el));
console.log(sum);
sum = 0;

// Способ 5
arr.forEach((el) => (sum += el));
console.log(sum);
sum = 0;

// Способ 6
for (let item of arr) {
  sum += item;
}
console.log(sum);

// 4.1 Массивы: Создайте массив строк и объедините их в одну строку разными способами.

const arrStr = ["1", "привет", "JavaScript", "Webpack"];

let str = "";

for (let i = 0; i < arrStr.length; i += 1) {
  str += arrStr[i];
}

console.log(str);
str = "";

// Способ 2
str = arrStr.reduce((acc, el) => {
  str += " ";
  acc += el;
  return acc;
}, str);
console.log(str);
str = "";

// Способ 3
let countStr = 0;
function sumArrStr(arr) {
  if (arrStr.length === countStr) {
    return;
  }

  str += arrStr[countStr];
  countStr++;
  sumArrStr(arr);
}
sumArrStr(arrStr);
console.log(str);
str = "";

// Способ 4
arrStr.map((el) => (str += el));
console.log(str);
sum = "";

// 4.1 Массивы: Найдите максимальный и минимальный элементы в массиве чисел разными способами.

const arrNum = [1, 2, 4, 442, 67, 89, 2, 4, 5, 6];
let maxNumber = Math.max(...arrNum);
let minNumber = Math.min(...arrNum);
console.log(maxNumber, minNumber);

const arrNum2 = [11, -2, 4, 6742, 671, 89, 2, 4, 5, 6];
let maxNumber2 = 12;
let minNumber2 = 12;
for (let item of arrNum2) {
  if (item > maxNumber2) {
    maxNumber2 = item;
  } else if (item < minNumber2) {
    minNumber2 = item;
  }
}
console.log(maxNumber2, minNumber2);

// 4.2

class Stack { 
  constructor() {
    this.items = []; 
  }

  push(item) {  
    this.items.push(item); 
  }

  pop() { 
    if (this.isEmpty()) { 
      return undefined; 
    }
    return this.items.pop();
  }

  peek() { 
    if (this.isEmpty()) { 
      return undefined; 
    }
    return this.items[this.items.length - 1]; 
  }

  isEmpty() { 
    return this.items.length === 0; 
  }

  size() { 
    return this.items.length; 
  }

  clear() { 
    this.items = [];
  }
}


const myStack = new Stack(); 

console.log( myStack.isEmpty()); 
myStack.push(10); 
myStack.push(20); 
myStack.push(30); 

console.log( myStack.peek()); 
console.log( myStack.pop()); 
console.log( myStack.peek()); 

// 4.3
class Queue {
  constructor() {
   
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}


const myQueue = new Queue();

console.log("Очередь пуста?", myQueue.isEmpty()); 
console.log("Размер очереди:", myQueue.size());   
console.log("Первый в очереди (peek):", myQueue.peek()); 

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log("Очередь пуста?", myQueue.isEmpty()); 
console.log("Размер очереди:", myQueue.size());   
console.log("Первый в очереди (peek):", myQueue.peek()); 

console.log("Исключаем из очереди первого (dequeue):", myQueue.dequeue()); 
console.log("Размер очереди после dequeue:", myQueue.size());   
console.log("Первый в очереди (peek) после dequeue:", myQueue.peek()); 

myQueue.clear();
console.log("Очередь после clear:", myQueue.items); 
console.log("Очередь пуста после clear?", myQueue.isEmpty()); 


  const x = outerFunc(outerVar);
  outerVar = "outer-2";
  globalVar = "guess";
  x("inner");//guess, outer-2, inner
  // разобрался почему outer будет а не outer-2, ответ оставил неправильным для себя
} 

// Задание 5
const str = "Hello";
const str2 = "Hi";
const str3 = `Bonjur`;
const str4 = String("Привет");

const num = 5;
const num2 = Number(1);

const bool = true;
const bool2 = !!5;
const bool3 = !!0;
const bool4 = Boolean(0);

const null1 = null;

const undefined1 = undefined;

const bigInt = 1234567890123456789012345678901234567890n

const symbol1 = Symbol("id")

// Задание 6
console.log("B" + "a" + (1 - "hello")); // "BaNaN"
console.log((true && 3) + "d"); // "3d"
console.log(Boolean(true && 3) + "d"); // "trued"
console.log(NaN + 1); // NaN
console.log(NaN + "o"); // "NaNo"
console.log(undefined + 1); // NaN
console.log(undefined - 1); // NaN
console.log(null + 1); // 1
console.log(null / 5); // 0
console.log(5 / undefined); // NaN
console.log(-5 / null); // -Infinity
console.log(null == 0); // false
console.log(null == ""); // false
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null == ""); //
console.log("foo" + +"bar"); // "fooNaN"
console.log("11" + "1" - 1); // 110
console.log(typeof Object); // 'function'
console.log(typeof Math); // 'object'
console.log(new String("foo") == "foo"); // true
console.log(new String("foo") === "foo"); // false

console.log('поработал с git rebaase');

async function sendOptionsRequest(url) {
    try {
      const response = await fetch(url, {
        method: 'OPTIONS' // Указываем метод запроса: OPTIONS
      });
  
      console.log("OPTIONS Request Status:", response.status);
      console.log("OPTIONS Request Headers:");
      for (const [name, value] of response.headers.entries()) {
        console.log(`  ${name}:${value}`);
      }
  
      const text = await response.text();
      if (text) {
        console.log("OPTIONS Response Body (usually empty):", text);
      }
  
    } catch (error) {
      console.error("OPTIONS Request Error:", error);
    }
  }
  
  // 2. URL для отправки OPTIONS запроса -  https://get.geojs.io/v1/ip/geo.json
  const apiUrlEndpoint = 'https://get.geojs.io/v1/ip/geo.json';
  
  // 3. Вызываем функцию для отправки OPTIONS запроса
  sendOptionsRequest(apiUrlEndpoint);
  

let controller = new AbortController();
setTimeout(() => controller.abort(), 1);

try {
  let response = await fetch('https://get.geojs.io/v1/ip/geo.json', {
    signal: controller.signal
  });
  console.log(response)
} catch(err) {
  if (err.name == 'AbortError') { // обработать ошибку от вызова abort()
    console.log("Прервано!",err.name);
  } else {
    throw err;
  }
}


