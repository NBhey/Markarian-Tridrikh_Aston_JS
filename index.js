// Задание 1

function Hamster() {
  this.food = []; // пустой "живот"
}

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
  // num = 1:

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
