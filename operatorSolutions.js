// Level 1

// number 1
let firstName = "Kelechi"; // string
let lastName = "Anomneze"; // string
let country = "Nigeria"; // string
let city = "Lagos"; // string
let age = 26; // number
let isMarried = false; // Boolean
let year = 2023; // number

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

// number 2
let num = 10; // number not 10
console.log(typeof num);

// number 3
let numTwo = 9.8;
console.log(parseInt(numTwo)); // 9 not 10

// number 4
// true statements
console.log(2 + 2 === 4);
console.log(typeof "Hello" === "string");
console.log(Array.isArray([1, 2, 3]));

// false statements
console.log(5 > 10);
console.log(null === undefined);
console.log(NaN === NaN);

// number 5

const check = 4 > 3; // true
const check2 = 4 >= 3; // true
const check3 = 4 < 3; // false
const check4 = 4 <= 3; // false
const check5 = 4 == 4; // true
const check6 = 4 === 4; // true
const check7 = 4 != 4; // false
const check8 = 4 !== 4; // false
const check9 = 4 != "4"; // false
const check10 = 4 == "4"; // true
const check11 = 4 === "4"; // false
const check12 = "python".length > "jargon".length; // false

console.log(check);
console.log(check2);
console.log(check3);
console.log(check4);
console.log(check5);
console.log(check6);
console.log(check7);
console.log(check8);
console.log(check9);
console.log(check10);
console.log(check11);
console.log(check12);

// number 6

const check13 = 4 > 3 && 10 < 12; // true
const check14 = 4 > 3 && 10 > 12; // false
const check15 = 4 > 3 || 10 < 12; // true
const check16 = 4 > 3 || 10 > 12; // true
const check17 = !(4 > 3); // false
const check18 = !(4 < 3); // true
const check19 = !false; // true
const check20 = !(4 > 3 && 10 < 12); // false
const check21 = !(4 > 3 && 10 > 12); // true
const check22 = !(4 === "4"); // true

console.log(check13);
console.log(check14);
console.log(check15);
console.log(check16);
console.log(check17);
console.log(check18);
console.log(check19);
console.log(check20);
console.log(check21);
console.log(check22);
