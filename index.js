console.log('Привет, мир!')

console.log('Hello,world!')

console.log('Hello,world!')
let test
let test2

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