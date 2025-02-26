//  Задача 1

let test = 150;
Promise.reject("a") // 1) создали промис, который сразу отклоняется со значением "а". Имеем промис в состоянии rejected со значением "а"
  .catch(
    (p) => p + "b",
    (function () {
      console.log(`я выполнился, ${(test = test + 1)}`);
    })()
  ) // 2) Поскольку промис отклонен выполняем первый catch. Внутри значение "a"(передано в параметр "р"). Суммируем "а" + "b" = "ab". Промис перешел в состояние fulfilled с результатом "ab"
  .catch((p) => p + "c", (test += 100)) // 3) Из-за того,что в п.2 промис перешел в состояние fulfilled данный catch игнорируется.
  .then((p) => p + "d") // 4) Промис в состоянии fulfilled поэтому выполняется .then. В параметре "р" теперь "ab", "ab" + "d" = "abd". Промис переходит в состояние fulfilled с результатом "abd"
  .then((p) => p + "f") // 5) Т.к. в п.4 промис находится в состоянии fulfilled, то и данный .then тоже выполнится. В "p" находится "abd". "abd" + "f" = "abdf".Промис переходит в состояние fulfilled с результатом "abd"
  .catch((p) => p + "h") // 6) Т.к. в п.5 промис перешел в состояние fulfilled, то данный catch игнорируется
  .finally(
    (p) => p + "e",
    (function () {
      test = test + 150;
    })()
  ) // 7) Метод .finally выполняется всегда, независимо от того, был ли промис выполнен или отклонен.Однако важно помнить, что .finally не изменяет результат промиса. Он просто выполняет код внутри себя.
  .then((p) => console.log(p, test));

//   Задача 2

console.log("1");

setTimeout(() => console.log("2"), 1);

let promise = new Promise((resolve) => {
  console.log("3");
  resolve();
});
promise.then(() => console.log("4"));
setTimeout(() => console.log("5"));
console.log("6");

// 1, 3, 6, 4, 5, 2

///////////////////////////////////////////////
// Задача 3
setTimeout(() => console.log("a"));

Promise.resolve()
  .then((first) => {
    console.log("first:", first);
    return "b";
  })
  .then(
    Promise.resolve().then((second) => {
      console.log("second: ", second);
      return "c";
    })
  ) // тут меня подловили, что это аргумент из-за этого неправильно сначала решил
  .then((third) => console.log("third: ", third));

console.log("d");
//d, "first:", undefined, "second", undefined, "third:", c, a

// Задача 4

let a = 5;

console.log(a);

setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);

Promise.resolve().then(() => {
  console.log(a);
  a = 15;
});

console.log(a);

//5, 5, 5, 15

//Bonus Task Необходимо реализовать функцию fetchUrl. Принимает url, запрашивает данные, если всё ок, возвращает промис с данными, если нет,
// то пытается снова и выкидывает промис с ошибкой только после 5 попыток.
let countForFetchUrl = 0; 
async function fetchUrl(url) {
  const retries = 5;
  try {
    const response = await fetch(url);
    if (response.ok) return await response.json();
  } catch (err) {
    if(retries == countForFetchUrl){
      throw err
    } else {
      console.warn(`Запрос не удался, попытка ${countForFetchUrl}`,err)
      countForFetchUrl +=1
      return fetchUrl(url)
    }
  }
}

fetchUrl("https://get.geojs.io/v1/ip/geo.json")
  .then((data) => console.log("Data:", data))
  .catch((error) => console.error("Error:", error));

fetchUrl('https://google/com&#39')
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error));

// Самостоятельная работа

// let promise1 = new Promise(function(resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise
//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     setTimeout(() => resolve(console.log("done")), 1000);
//   });
