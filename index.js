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

{class Animal {
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
      console.log('Это ' + this.name)
    }
  }
  let rabbit = new Rabbit("Белый кролик");
  rabbit.showAnimal()
}