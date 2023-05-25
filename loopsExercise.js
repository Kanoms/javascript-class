const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Loop 1
// 1
// for loop
for (let a = 0; a <= 10; a++) {
  console.log(a);
}

// while loop
let b = 0;
while (b <= 10) {
  console.log(b);
  b++;
}

// do while loop
let c = 0;
do {
  console.log(c);
  c++;
} while (c <= 10);

// 2
// for loop
for (let a = 10; a >= 0; a--) {
  console.log(a);
}

// while loop
let d = 10;
while (d >= 0) {
  console.log(d);
  d--;
}

// do while loop
let e = 10;
do {
  console.log(e);
  e--;
} while (e >= 0);

// 3
const n = 10;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 4
for (let i = 1; i <= 7; i++) {
  let string = "";

  for (let j = 1; j <= i; j++) {
    string = string + "#";
  }

  console.log(string);
}

// 5
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// 6
console.log("i i^2 i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

// 7
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 8
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// 9
for (let number = 2; number <= 100; number++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number);
  }
}

// 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// 11
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum1 = sum1 + i;
  } else if (i % 2 === 1) {
    sum2 = sum2 + i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sum1}. And the sum of all odds from 0 to 100 is ${sum2}`
);

// 12
let sum3 = 0;
let sum4 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum3 = sum3 + i;
  } else if (i % 2 === 1) {
    sum4 = sum4 + i;
  }
}
console.log([sum3, sum4]);

const sums = [0, 0];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sums[0] += i;
  } else {
    sums[1] += i;
  }
}

console.log(sums);

// 13
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  randomNumbers.push(randomNumber);
}

console.log(randomNumbers);

// 14
const randomNumbers2 = [];

while (randomNumbers2.length < 5) {
  const randomNumber = Math.floor(Math.random() * 100);

  if (!randomNumbers2.includes(randomNumber)) {
    randomNumbers2.push(randomNumber);
  }
}

console.log(randomNumbers2);

// 15
function generateRandomId() {
  const characters = "5j2khz";
  let randomId = "";

  for (let i = 0; i < characters.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }

  return randomId;
}

const randomId = generateRandomId();
console.log(randomId);

// Level 2
// 1
function generateRandomId2() {
  const characters = "fe3jo1gl124g";
  let randomId2 = "";

  for (let i = 0; i < characters.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId2 += characters[randomIndex];
  }

  return randomId2;
}

const randomId2 = generateRandomId2();
console.log(randomId2);

function generateRandomId3() {
  const characters = "xkqci4utda1lmbelpkm03rba";
  let randomId3 = "";

  for (let i = 0; i < characters.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId3 += characters[randomIndex];
  }

  return randomId3;
}

const randomId3 = generateRandomId3();
console.log(randomId3);

// 2
function generateRandomHexadecimal() {
  const characters = "0123456789ABCDEF";
  let randomHex = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomHex += characters[randomIndex];
  }

  return randomHex;
}

const randomHexadecimal = generateRandomHexadecimal();
console.log(randomHexadecimal);

// 3
function generateRandomRgbColor() {
  let rgbColor = "rgb(";

  for (let i = 0; i < 3; i++) {
    const component = Math.floor(Math.random() * 256);
    rgbColor += component;

    if (i < 2) {
      rgbColor += ", ";
    }
  }

  rgbColor += ")";

  return rgbColor;
}

const randomRgbColor = generateRandomRgbColor();
console.log(randomRgbColor);

// 4
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr);

// 5
const newArr2 = [];
for (let i = 0; i < countries.length; i++) {
  newArr2.push(countries[i].length);
}

console.log(newArr2);

// 6
const formattedCountries = [];

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const abbreviation = country.slice(0, 3).toUpperCase();
  const length = country.length;

  formattedCountries.push([country, abbreviation, length]);
}

console.log(formattedCountries);

// 7
const countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];

  if (country.includes("land")) {
    countriesWithLand.push(country);
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log("All these countries are without land");
}

// 8
const countriesEndsWithIA = [];

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];

  if (country.endsWith("ia")) {
    countriesEndsWithIA.push(country);
  }
}

if (countriesEndsWithIA.length > 0) {
  console.log(countriesEndsWithIA);
} else {
  console.log("These are countries without 'ia' at the end");
}

// 9
let longestCountry = "";

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];

  if (country.length > longestCountry.length) {
    longestCountry = country;
  }
}

console.log(`${longestCountry}`);

// 10
const countriesWithFiveCharacters = [];

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];

  if (country.length === 5) {
    countriesWithFiveCharacters.push(country);
  }
}

if (countriesWithFiveCharacters.length > 0) {
  console.log(countriesWithFiveCharacters);
} else {
  console.log("No countries with exactly 5 characters found.");
}

// 11
let longestInWebTechs = "";

for (let i = 0; i < webTechs.length; i++) {
  const webTech = webTechs[i];

  if (webTech.length > longestInWebTechs.length) {
    longestInWebTechs = webTech;
  }
}

console.log(`${longestInWebTechs}`);

// 12
const formattedWebTechs = [];

for (let i = 0; i < webTechs.length; i++) {
  const webTech = webTechs[i];
  const webLength = webTech.length;

  formattedWebTechs.push([webTech, webLength]);
}

console.log(formattedWebTechs);

// 13
const mernAcronym = [];

for (let i = 0; i < mernStack.length; i++) {
  const mern = mernStack[i];
  const abbreviation = mern.slice(0, 1).toUpperCase();

  mernAcronym.push(abbreviation);
}

console.log(mernAcronym);

let acronym = "";

for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
}

console.log(acronym);

// 14
for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}

for (const webTech of webTechs) {
  console.log(webTech);
}

// 15
let fruits = ["banana", "orange", "mango", "lemon"];
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// 16
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
