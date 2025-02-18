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
    console.log("wtf", this === i);  //здесь true потому что контект стрелочной функции - это экземпляр класса "A", и по скольку экземпляр класса записан в i, то this ссылается на i
  };
}

var i = new A();
console.log('Тут i',i) //Пишу для себя. Сделал чтоб посмотреть как свойство  arrFunc будет выглядеть, если бы написал arrFunc(){} то это был бы уже метод и он стал бы прототипом
i.arrFunc(); //

console.log(i.hasOwnProperty("arrFunc")); //hasOwnProperty   проверяет, есть ли у объекта i собственное свойство с именем arrFunc.Поскольку arrFunc было добавлена в экземпляр объекта i (а не в прототип), результат будет true.
// поясните ответ

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
    a: 'Ne test',
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
