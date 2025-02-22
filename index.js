
// Задание 1

function Hamster() {
  this.food = []; // пустой "живот"
}


// Задание 1. Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// Массивы в JavaScript часто называют "неправильными" из-за того, что они отличаются от классических массивов в других языках программирования и фактически сочетают в себе свойства нескольких структур данных.
// Почему "неправильные"?
// Традиционные массивы (например, в C, C++, Java) обычно обладают следующими характеристиками:
// 1) Фиксированный размер: Размер задается при создании и не меняется.
// 2) Однородные типы:  Содержат элементы только одного типа данных.
// 3) Непрерывное хранение в памяти: Элементы расположены в памяти последовательно.


// Задание 1


// Задание 2. Привязать контекст к функции logger()


Hamster.prototype.found = function (something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); // 2 (!??) // должно быть 0

// Задание 2

{
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }

  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  console.log(rabbit.name);

  // в чем ошибка? как исправить? Можно делать что угодно.
}

{
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
    showAnimal() {
      console.log("Это " + this.name);
    }
  }
  let rabbit = new Rabbit("Белый кролик");
  rabbit.showAnimal();
}

//  Задание 3
class A {
  constructor() {}

  arrFunc = () => {
    console.log(i);
    console.log(this);
    console.log("wtf", this === i); //здесь true потому что контект стрелочной функции - это экземпляр класса "A", и по скольку экземпляр класса записан в i, то this ссылается на i
  };
}

var i = new A();
console.log("Тут i", i); //Пишу для себя. Сделал чтоб посмотреть как свойство  arrFunc будет выглядеть, если бы написал arrFunc(){} то это был бы уже метод и он стал бы прототипом
i.arrFunc(); //

console.log(i.hasOwnProperty("arrFunc")); //hasOwnProperty   проверяет, есть ли у объекта i собственное свойство с именем arrFunc.Поскольку arrFunc было добавлена в экземпляр объекта i (а не в прототип), результат будет true.
// поясните ответ

// 2) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let total = 13;
  function searchTotal(arr, total) {
    for (let i = 0; i <= arr.length; i += 1) {
      for (let j = 1; j <= arr.length; j += 1) {
        if (arr[i] + arr[j] === total) {
          return [arr[i], arr[j]];
        }
      }
    }
  }
  console.log(`Бонус задание 2`, searchTotal(arr, total));
}
//  Второй способ решения через хеш-таблицу
console.log("--------------------------------------------------------------");
{
  function findPairWithSum(arr, total) {
    const set = new Set(); // создаем особый вид коллекции для того чтобы хранить уже просмотренные числа,
    for (let num of arr) {
      console.log(`Я ${num}`, set);
      const result = total - num; //Вычисляю какое число нужно добавить к текущему чтобы получать тотал
      if (set.has(result)) {
        // если в коллекции есть это число то добавь его и верни num и result
        return [result, num];
      }
      set.add(num); // иначе добавь это число в коллекцию
    }
    return [];
  }
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const total = 13;
  console.log(findPairWithSum(arr, total));
  //Шаги:
  // num = 1;

  // complement = 13 - 1 = 12.

  // 12 нет в Set. Добавляем 1 в Set: Set {1}.

  // num = 2:

  // complement = 13 - 2 = 11.

  // 11 нет в Set. Добавляем 2 в Set: Set {1, 2}.

  // num = 3:

  // complement = 13 - 3 = 10.

  // 10 нет в Set. Добавляем 3 в Set: Set {1, 2, 3}.

  // num = 4:

  // complement = 13 - 4 = 9.

  // 9 нет в Set. Добавляем 4 в Set: Set {1, 2, 3, 4}.

  // num = 5:

  // complement = 13 - 5 = 8.

  // 8 нет в Set. Добавляем 5 в Set: Set {1, 2, 3, 4, 5}.

  // num = 6:

  // complement = 13 - 6 = 7.

  // 7 нет в Set. Добавляем 6 в Set: Set {1, 2, 3, 4, 5, 6}.

  // num = 7:

  // complement = 13 - 7 = 6.

  // 6 есть в Set! Возвращаем пару [6, 7].
}
console.log("--------------------------------------------------------------");
//  Для себя
const testObj = {
  a: 1,
  c: {
    b: () => console.log("Я testObj", this),
  },
};
testObj.c.b();

const testObj2 = {
  a: 1,
  c: {
    a: "Ne test",
    b: function () {
      console.log(`Я testObj2, со мной тут ${this.a}`, this);
    },
  },
};
testObj2.c.b();

function test() {
  console.log("я test", this);
}
test();

function test2() {
  const obj = {
    a: () => {
      console.log("я test2", this);
    },
  };
  return obj.a();
}
test2();

function test3() {
  const obj = {
    a: function () {
      console.log("я test3", this);
    },
  };
  return obj.a();
}
test3();

class testClass {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }
  test() {
    console.log("я testClass", this);
  }
}
let testClassVariable = new testClass("Иван", "Иванов");


testClassVariable.test();


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



