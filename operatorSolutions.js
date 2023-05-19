// Level 1

// number 1
let firstName = "Kelechi"; // string
let lastName = "Anomneze"; // string
let country = "Nigeria"; // string
let city = "Lagos"; // string
let age = 26; // number
let isMarried = false; // Boolean
let thisYear = 2023; // number

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof thisYear
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

// number 7
let now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
console.log(now.getTime());

console.log(year);
console.log(month);
console.log(date);
console.log(hours);
console.log(minutes);
const allSeconds = Date.now();
console.log(allSeconds);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

// LEVEL 2
// number 1
function calculateArea() {
  // Prompt the user for base and height
  let base = prompt("Enter the base of the triangle:");
  let height = prompt("Enter the height of the triangle:");

  // Calculate the area of the triangle
  let area = 0.5 * parseInt(base) * parseInt(height);

  // Display the result
  document.getElementById("result").innerHTML =
    "The area of the triangle is: " + area;
}

base = 20;
height = 10;
area = 0.5 * parseInt(base) * parseInt(height);
console.log(`The area of the triangle is ${area}`);

// number 2
function calculatePerimeter() {
  let sideA = prompt("Enter side A");
  let sideB = prompt("Enter side B");
  let sideC = prompt("Enter side C");
  let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
  // Display the result
  document.getElementById("result2").innerHTML =
    "The perimeter of the triangle is: " + perimeter;
}

sideA = 5;
sideB = 4;
sideC = 3;
perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(`The perimeter of the triangle is ${perimeter}`);

// number 3

function calculateRectAreaPeri() {
  let length = parseInt(prompt("Enter length"));
  let width = parseInt(prompt("Enter width"));
  let areaOf = length * width;
  let perimeterOf = 2 * (length + width);

  // Display the result
  document.getElementById("result3").innerHTML = [
    "The area of the rectangle is: " + areaOf,
    " and The perimeter of the rectangle is: " + perimeterOf,
  ];
}

length = 5;
width = 4;
areaOf = length * width;
perimeterOf = 2 * (length + width);
console.log(
  `The area of the rectangle is ${areaOf}, and the perimeter is ${perimeterOf}`
);

function calculateCircle() {
  const pi = 3.14;
  let radius = parseInt(prompt("Enter radius"));
  let areaOfCircle = pi * radius * radius;
  let circumference = 2 * (pi * radius);

  // Display the result
  document.getElementById("result4").innerHTML = [
    "The area of the circle is: " + areaOfCircle,
    " and The circumference of the rectangle is: " + circumference,
  ];
}

const pi = 3.14;
radius = 7;
areaOfCircle = pi * radius * radius;
circumference = 2 * (pi * radius);
console.log(
  `The area of the circle is ${areaOfCircle}, and the circumference is ${circumference}`
);

// number 5. Calculate the slope, x-intercept, and y-intercept of y = 2x - 2
const equation1 = "y = 2x - 2";
const slope1 = 2;
const xIntercept1 = 1;
const yIntercept1 = -2;

function calculateSlopeOne() {
  document.getElementById("result5").innerHTML = [
    "Slope: " + slope1,
    " x-intercept: " + xIntercept1,
    " y-intercept: " + yIntercept1,
  ];
}

console.log("Equation 1: " + equation1);
console.log("Slope: " + slope1);
console.log("x-intercept: " + xIntercept1);
console.log("y-intercept: " + yIntercept1);

// number 6. Calculate the slope between point (2, 2) and point (6, 10)

function calculateSlopeTwo() {
  const x1 = parseFloat(prompt("Enter x-coordinate for point 1:"));
  const y1 = parseFloat(prompt("Enter y-coordinate for point 1:"));
  const x2 = parseFloat(prompt("Enter x-coordinate for point 2:"));
  const y2 = parseFloat(prompt("Enter y-coordinate for point 2:"));

  const slope2 = (y2 - y1) / (x2 - x1);

  document.getElementById("result6").innerHTML = "slope: " + slope2;
}

x1 = 3;
y1 = 4;
x2 = 7;
y2 = 8;

slope2 = (y2 - y1) / (x2 - x1);
console.log("Slope between the given points: " + slope2);

// number 7. Compare the slope of the above two questions
if (slope1 === slope2) {
  console.log("The slopes are equal.");
} else {
  console.log("The slopes are not equal.");
}

// number 8. Calculate the value of y = x^2 + 6x + 9 for different x values to find when y is 0

function calculateEquation() {
  const xValue = parseFloat(prompt("Enter the x value to calculate y:"));
  const yValue = Math.pow(xValue, 2) + 6 * xValue + 9;

  document.getElementById("result7").innerHTML = "y: " + yValue;
}

xValue = -3;
yValue = Math.pow(xValue, 2) + 6 * xValue + 9;
console.log("y = " + yValue);

// number 9

function calculatePay() {
  let hoursWorked = parseInt(prompt("Enter hours worked"));
  let ratesPerHr = parseInt(prompt("Enter rate per hours worked"));
  let pay = hoursWorked * ratesPerHr;

  document.getElementById(
    "result8"
  ).innerHTML = `Hours worked is ${hoursWorked} and the rates is ${ratesPerHr} therefore accumulated pay is ${pay}`;
}
hoursWorked = 4;
ratesPerHr = 6;
pay = hoursWorked * ratesPerHr;
console.log(
  `Hours worked is ${hoursWorked} and the rates is ${ratesPerHr} therefore accumulated pay is ${pay}`
);

// number 10
let nameLength = "Kelechi".length;
if (parseInt(nameLength) > 7) {
  console.log("your name is long");
} else {
  console.log("your name is short");
}

// Number 11

firstName = "Kelechi";
lastName = "Anomneze";
if (firstName.length > lastName.length) {
  console.log(
    `Your first name, ${firstName} is longer than your family name, ${lastName}`
  );
} else {
  console.log(
    `Your first name, ${firstName} is shorter than your family name, ${lastName}`
  );
}

// 1
let myAge = 250;
let yourAge = 25;
let ageGap = parseInt(myAge) - parseInt(yourAge);
console.log(`I am ${ageGap} years older than you.`);

// 2
function checkAge() {
  const currentYear = new Date().getFullYear();
  const birthYear = parseInt(prompt("Enter year of birth"));
  const resultElement = document.getElementById("result9");

  if (!isNaN(birthYear)) {
    const age = currentYear - birthYear;

    if (age >= 18) {
      resultElement.textContent = `You are ${age}. You are old enough to drive.`;
    } else {
      const yearsToWait = 18 - age;
      resultElement.textContent = `You are ${age}. You will be allowed to drive after ${yearsToWait} year(s).`;
    }
  } else {
    resultElement.textContent = "Please enter a valid birth year.";
  }
}

birthYear = 1996;
currentYear = new Date().getFullYear();
age = currentYear - birthYear;

if (birthYear !== null) {
  const age = currentYear - birthYear;

  if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
  } else {
    const yearsToWait = 18 - age;
    console.log(
      `You are ${age}. You will be allowed to drive after ${yearsToWait} year(s).`
    );
  }
}

birthYear = 2006;
currentYear = new Date().getFullYear();
age = currentYear - birthYear;

if (birthYear !== null) {
  const age = currentYear - birthYear;

  if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
  } else {
    const yearsToWait = 18 - age;
    console.log(
      `You are ${age}. You will be allowed to drive after ${yearsToWait} year(s).`
    );
  }
}

// 3
function calSecondsLived() {
  let yearsLived = parseInt(prompt("Enter number of years you live"));
  const secondsInYear = 365 * 24 * 60 * 60;

  if (yearsLived !== null) {
    const totalSeconds = yearsLived * secondsInYear;
  }
  document.getElementById(
    "result10"
  ).innerHTML = `You have lived ${totalSeconds} seconds so far.`;
}

yearsLived = 100;
const secondsInYear = 365 * 24 * 60 * 60;
totalSeconds = yearsLived * secondsInYear;
console.log(`You have lived ${totalSeconds} seconds so far.`);

// 4
// i
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

// ii
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);

// iii
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

// LEVEL 3

const rightNow = new Date();
const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};
const formattedTime = rightNow.toLocaleString("en-US", options);

console.log(formattedTime);
