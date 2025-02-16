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