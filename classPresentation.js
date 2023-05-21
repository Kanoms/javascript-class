let firstName = "KeLeChI";
let lastName = "AnOmNeZe";
let space = " ";

let fullName =
  firstName[0].toUpperCase() +
  firstName.slice(1).toLowerCase() +
  space +
  lastName.charAt(0).toUpperCase() +
  lastName.slice(1).toLowerCase();

console.log(fullName);
console.log(fullName[0]);
// Let us access the first character in 'JavaScript' string.

console.log(fullName.charAt(0));
// charAt(): Takes index and it returns the value at that index

console.log(fullName.concat(" is here"));
console.log(fullName.concat(" is here", "and well"));
// concat(): it takes many substrings and creates concatenation.
// string.concat(substring, substring, substring)

console.log(fullName.concat(" is here").replace("is here", "has arrived"));
// replace(): takes as a parameter the old substring and new substring and replaces the old with the new.
// string.replace(oldsubstring, newsubstring)

console.log(fullName.charCodeAt(0));
// ASCII (American Standard Code for Information Interchange) is a character
// encoding standard that assigns unique numerical values to represent characters.
// Each character in the ASCII set is associated with a specific decimal number.

console.log(firstName.length);
// length: The string length method returns the number of characters in a string included empty space.

console.log(firstName.toLowerCase());
// toLowerCase(): this method changes the string to lowercase letters.

console.log(firstName.toUpperCase());
// toUpperCase(): this method changes the string to uppercase letters.

console.log(firstName.split(""));
// split(): The split method splits a string at a specified place.

console.log(fullName.trim());
//trim(): Removes trailing space in the beginning or the end of a string.

console.log(firstName.slice(1));
// cutoff

function checkSeason(month) {
  month = month.toLowerCase().trim();

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
}

console.log(checkSeason((month = "September  ")));

function checkPassword(password) {
  if (password.length > 5) {
    return "Password is acceptible";
  } else {
    return "Password is too short";
  }
}

console.log(checkPassword((password = "password")));

function greeting() {
  firstGreeting = "Good Morning";
  let now = new Date();
  if (now < 12) {
    return `${firstGreeting}`;
  } else {
    return `${firstGreeting.replace("Morning", "Afternoon")}`;
  }
}
console.log(greeting());

function checkWord() {
  word = prompt("Enter Name").toLowerCase().trim();
  if (word === "femi") {
    return "success";
  } else {
    return "fail";
  }
}

console.log(checkWord());
