// Задание 1. Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
// Массивы в JavaScript часто называют "неправильными" из-за того, что они отличаются от классических массивов в других языках программирования и фактически сочетают в себе свойства нескольких структур данных.
// Почему "неправильные"?
// Традиционные массивы (например, в C, C++, Java) обычно обладают следующими характеристиками:
// 1) Фиксированный размер: Размер задается при создании и не меняется.
// 2) Однородные типы:  Содержат элементы только одного типа данных.
// 3) Непрерывное хранение в памяти: Элементы расположены в памяти последовательно.

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
