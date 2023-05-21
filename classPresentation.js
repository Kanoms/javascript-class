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
console.log(fullName.charAt(0));
console.log(fullName.concat(" is here"));
console.log(fullName.concat(" is here").replace("is here", "has arrived"));
console.log(fullName.charCodeAt(0));
console.log(firstName.length);
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.split(""));
console.log(fullName.trim());
console.log(firstName.slice(1));

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

function greeting(time) {
  greeting = "Good Morning";
  let now = new Date();
}
let now = new Date();
const minutes = now.getMinutes();
console.log(now.getHours());
