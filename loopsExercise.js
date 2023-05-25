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
  const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99

  if (!randomNumbers2.includes(randomNumber)) {
    randomNumbers2.push(randomNumber);
  }
}

console.log(randomNumbers2);

// 15
function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters[randomIndex];
  }

  return randomId;
}

const randomId = generateRandomId();
console.log(randomId);
