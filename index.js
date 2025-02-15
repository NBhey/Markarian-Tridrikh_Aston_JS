
// Задание 1

// Литеральный
{
  const innerObject = {};
  const middleArray = [1, 2, 3, innerObject];
  const workingObject = {
    a: middleArray,
  };
  console.log(workingObject);
}
//  Функция-конструктор
{
  const innerObject = {};
  const middleArray = [1, 2, 3, innerObject];

  function WorkingObjectConstructor() {
    this.a = middleArray;
  }

  const workingObject = new WorkingObjectConstructor();

  console.log(workingObject);
}
// Через класс
{
  const innerObject = {};
  const middleArray = [1, 2, 3, innerObject];

  class WorkingObjectClass {
    constructor() {
      this.a = middleArray;
    }
  }

  const workingObject = new WorkingObjectClass();

  console.log(workingObject);
}
//  Метод Object.create
{
  const innerObject = {};
  const middleArray = [1, 2, 3, innerObject];

  const workingObject = Object.create(null);
  workingObject.a = middleArray;

  console.log(`null`, workingObject);
}

{
  const innerObject = {};
  const middleArray = [1, 2, 3, innerObject];

  const workingObject = Object.create({});
  workingObject.a = middleArray;

  console.log(`{}`, workingObject);
}
// new Object
{
  const innerObject = {};
  const middleArray = [1, 2, 3, innerObject];

  const workingObject = new Object();
  workingObject.a = middleArray;

  console.log(workingObject);
}

console.log("------------------Задани 2------------------");
{
  const innerObject = { value: 1 };
  const middleArray = [1, 2, 3, innerObject];
  const workingObject = {
    a: middleArray,
  };
  // Spread поверхностная копия
  {
    const shallowCopyObjectSpread = { ...workingObject };

    console.log("Оригинал:", workingObject);
    console.log("Поверхностная копия (Spread):", shallowCopyObjectSpread);
  }
  // Object.assign поверхностная копия
  {
    const shallowCopyObjectAssign = Object.assign({}, workingObject);

    console.log("Оригинал:", workingObject);
    console.log("Поверхностная копия (Assign):", shallowCopyObjectAssign);
  }
  // Parse/stringify глубокая копия
  {
    const deepCopyObjectJSON = JSON.parse(JSON.stringify(workingObject));

    console.log("Оригинал:", workingObject);
    console.log("Глубокая копия (JSON):", deepCopyObjectJSON);
  }
}

console.log("------------------Задани 3------------------");
// Стрелочная функция
{
  const makeCounter = () => {
    let count = 0;
    return () => count++;
  };
  const counter = makeCounter();
  console.log(counter);
  console.log(counter());
}
//  Через объект
{
  function makeCounter() {
    return {
      count: 0,
      increment() {
        return this.count++;
      },
    };
  }

  const counter = makeCounter();
  console.log(counter);
  console.log(counter.increment());
}
//  Через класс
{
  class Counter {
    constructor() {
      this.count = 0;
    }

    increment() {
      return this.count++;
    }
  }

  const makeCounter = () => new Counter();

  const counter = makeCounter();
  console.log(counter);
  console.log(counter.increment());
}
// Замыкание
{
  function makeCounter(startFrom = 0) {
    let count = startFrom;
    return function () {
      return count++;
    };
  }

  const counter = makeCounter();
  console.log(counter);
  console.log(counter()); //0
}

console.log("------------------Доп задания------------------");

// Задача на замыкание 1:
{
  function createIncrement() {
    let value = 0;

    function increment() {
      value += 1;
      console.log(value);
    }

    const message = `Current value is ${value}`;

    function log() {
      console.log(message);
    }

    return [increment, log];
  }

  const [increment, log] = createIncrement();

  increment(); // 1
  increment(); // 2
  increment(); // 3

  log(); //"Current value is 0"        // почему не 3? Потому что при инициализации переменной она запомнила, что value = 0
}
// Как должно быть
{
  function createIncrement() {
    let value = 0;

    function increment() {
      value += 1;
      console.log(value);
    }

    function log() {
      const message = `Current value is ${value}`;
      console.log(message);
    }

    return [increment, log];
  }

  const [increment, log] = createIncrement();

  increment(); // 1
  increment(); // 2
  increment(); // 3

  log(); //"Current value is 3"
}
// Задача на замыкание 2:
{
  let group = getGroup();

  group[0](); // 10
  group[5](); // 10
  // потому что функция запомнила переменную i
  // и в момент ее вызова она посмотрит на нее, а за счет того что цикл закончил,
  // там уже будет 10
  function getGroup() {
    let students = [];
    let i = 0;
    while (i < 10) {
      students[i] = function () {
        console.log(i);
      };
      i++;
    }

    return students;
  }
}

// Задача на замыкание 3:

{
  var globalVar = "global";
  var outerVar = "outer";

  function outerFunc(outerParam) {
    function innerFunc(innerParam) {
      console.log(globalVar, outerParam, innerParam); // guess,outer,inner
    }
    return innerFunc;
  }

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

