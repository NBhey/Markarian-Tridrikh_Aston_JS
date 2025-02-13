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
