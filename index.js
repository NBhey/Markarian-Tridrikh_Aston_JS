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
