Array.prototype.mySome = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5];
const hasEven = arr.mySome((num) => num % 2 === 0);
console.log(hasEven);

// 1

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 3 3 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 0 1 2
}
// что в консоли и в каком порядке?

//Сперва отработает первый цикл. Из-за того, что var имеет функциональную область видимости, он находится в пределах всей функции. И когда выполнится колбэк в setTimeout то значение i сошлется на 3, т.к.
// цикл уже выполнился и i = 3

// Затем выполнится второй цикл. i объявлена с помощью let (имеет блочную область видимости), соотвественно она существует в блоке, соответственно каждый колбэк вызов сошлется на свою собственную i в блоке

// 2 что в консоли и в каком порядке?
Promise.resolve(1)
  .then((val) => {
    console.log(val); // 1
    return val + 1; 
  })
  .then((val /* пришла 2 из предыдущего then*/) => {
    console.log(val); // 2
  })
  .then((val /*прошлый then возвращает undefined */) => {
    console.log(val); // undefined
    return Promise.resolve(3).then((val) => {
      console.log(val); // 3
    });
  })
  .then((val /*предыдущий then возвращает промис, который возвращает undefined */
    ) => {
      console.log(val); // undefined
      return Promise.reject(4);
    }
  )
  .catch((val /*прошлый then вернул промис с reject(4) */) => {
    console.log(val);
  })
  .finally((val) => {
    console.log(val); // undefined
    return 10; // не влияет
  })
  .then((val) => {
    console.log(val); // undefined
  });

// 3
{
  function F() {
    this.a = 1
  }
  
  const x = {method:function(){console.log('a1')}}
  
  F.prototype =  x;//что тут происходит? зачем? prototype это св-во функции-конструктора получается, что в прототипе функции передали ссылку на объект 
  
  const a = new F(); // создали объект с помощью функции-конструктор, у которой в прототипе x
  a.method()
  console.log(a.__proto__,a,typeof a) 
  console.log(x) 
  console.log(a.__proto__ === x) // true, ну и соотвественно ссылка на один и тот же объект, он равен сам себе 
} 
// 5 
{
  const user = {
    name: 'Bob',
    funcFunc() {
      return function() {
        console.log(1,this);
      }
    },
    funcArrow() {
      return () => {
        console.log(2,this);
      }
    },
    arrowFunc: () => {
      return function() {
        console.log(3,this);
      }
    },
    arrowArrow: () => {
      return () => {
        console.log(4,this);
      }
    },
  };
  
  user.funcFunc()(); // ?
  user.funcArrow()(); // ?
  user.arrowFunc()(); // ?
  user.arrowArrow()(); // ?
  
  
}