let shawarma;
function orderShawarma() {
  console.log("Order Shawarma");
  setTimeout(() => {
    shawarma = "shawarma";
  }, 3000);
  console.log("Shawarma was ordered");
}
orderShawarma();
console.log(`Eat ${shawarma}`);

function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Sunny");
    }, 1000);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "Sunny":
          resolve("☀️");
          break;
        case "Cloudy":
          resolve("☁️");
          break;
        case "Rainy":
          resolve("🌧");
          break;
        default:
          reject("Invalid Weather");
      }
    }, 1000);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

getWeather().then(getWeatherIcon).then(onSuccess, onError);
