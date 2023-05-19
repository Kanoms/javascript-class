// Level 1
// 1
function checkAge() {
  const yourAge = parseInt(prompt("Enter your age"));
  const resultElement = document.getElementById("result");

  if (!isNaN(yourAge)) {
    if (yourAge >= 18) {
      resultElement.textContent = "You are old enough to drive.";
    } else {
      const yearsToWait = 18 - yourAge;
      resultElement.textContent = `You are left with ${yearsToWait} years to drive.`;
    }
  } else {
    resultElement.textContent = "Please enter a valid birth year.";
  }
}

yourAge = 30;
if (yourAge >= 18) {
  console.log("You are old enough to drive.");
} else {
  const yearsToWait = 18 - yourAge;
  console.log(`You are left with ${yearsToWait} years to drive.`);
}

yourAge = 15;
if (yourAge >= 18) {
  console.log("You are old enough to drive.");
} else {
  const yearsToWait = 18 - yourAge;
  console.log(`You are left with ${yearsToWait} years to drive.`);
}

// 2

const myAge = parseInt(26);

function checkAge() {
  const yourAge = parseInt(prompt("Enter your age"));
  const resultElement = document.getElementById("result2");

  if (!isNaN(yourAge)) {
    if (yourAge > myAge) {
      let ageGap = yourAge - myAge;
      resultElement.textContent = `You are ${ageGap} years older than me.`;
    } else if ((yourAge = myAge)) {
      resultElement.textContent = "We are the same age";
    } else {
      let ageGap2 = myAge - yourAge;
      resultElement.textContent = `You are ${ageGap2} years younger than me.`;
    }
  } else {
    resultElement.textContent = "Please enter a valid birth year.";
  }
}

yourAge = 30;
ageGap = yourAge - myAge;
ageGap2 = myAge - yourAge;

if (yourAge > myAge) {
  let ageGap = yourAge - myAge;
  console.log(`You are ${ageGap} years older than me.`);
} else if ((yourAge = myAge)) {
  console.log("We are the same age");
} else {
  let ageGap2 = myAge - yourAge;
  console.log(`You are ${ageGap2} years younger than me.`);
}

// 3

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

// 4
let num = 2;
let remainder = num % 2;
if (remainder === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

function checkNo() {
  let num = parseInt(prompt("Enter a number"));
  let remainder = num % 2;
  const resultElement = document.getElementById("result3");
  if (remainder === 0) {
    resultElement.textContent = `${num} is an even number`;
  } else {
    resultElement.textContent = `${num} is an odd number`;
  }
}

num = 9;
remainder = num % 2;
if (remainder === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}

// LEVEL 2

// 1
let score = parseInt(89);
if (score >= 80) {
  console.log("you got an A");
} else if (score <= 79 && score >= 70) {
  console.log("you got a B");
} else if (score <= 69 && score >= 60) {
  console.log("you got a C");
} else if (score <= 59 && score >= 50) {
  console.log("you got a D");
} else if (score <= 49) {
  console.log("you got an F");
} else {
  console.log("NA");
}

function getGrade() {
  let score = parseInt(prompt("Enter score"));
  const resultElement = document.getElementById("result4");

  if (score >= 80) {
    resultElement.textContent = "you got an A";
  } else if (score <= 79 && score >= 70) {
    resultElement.textContent = "you got a B";
  } else if (score <= 69 && score >= 60) {
    resultElement.textContent = "you got a C";
  } else if (score <= 59 && score >= 50) {
    resultElement.textContent = "you got a D";
  } else if (score <= 49) {
    resultElement.textContent = "you got an F";
  } else {
    resultElement.textContent = "NA";
  }
}

// 2
function checkSeason(month) {
  month = month.toLowerCase();

  if (month === "september" || month === "october" || month === "november") {
    return "Autumn";
  } else if (
    month === "december" ||
    month === "january" ||
    month === "february"
  ) {
    return "Winter";
  } else if (month === "march" || month === "april" || month === "may") {
    return "Spring";
  } else if (month === "june" || month === "july" || month === "august") {
    return "Summer";
  } else {
    return "Invalid month";
  }
  const userInput = prompt("Enter a month:");
  const season = checkSeason(userInput);
  console.log("The season is:", season);
}

// Prompt the user for input
const userInput = "september";

const season = checkSeason(userInput);
console.log("The season is:", season);

// 3
function checkDay(day) {
  day = day.toLowerCase();

  if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
  ) {
    return `${day} is a working day`;
  } else if (day === "sunday" || month === "saturday") {
    return `${day} is a weekend`;
  } else {
    return "Invalid day";
  }
  const userInput2 = prompt("Enter a day:");
  const thisDay = checkSeason(userInput2);
}

day = "monday";

if (
  day === "monday" ||
  day === "tuesday" ||
  day === "wednesday" ||
  day === "thursday" ||
  day === "friday"
) {
  console.log(`${day} is a working day`);
} else if (day === "sunday" || month === "saturday") {
  console.log(`${day} is a weekend`);
} else {
  console.log("Invalid day");
}
