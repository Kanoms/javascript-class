const usersInfo = {
  firstName: "Kelechi",
  lastName: "Anomneze",
  age: 26,
  country: "Nigeria",
  city: "Lagos",
  email: "kanomneze@gmail.com",
  hobbies: ["watch football", "playing table", "coding"],
};

const txt = JSON.stringify(
  usersInfo,
  ["firstName", "lastName", "age", "country", "city", "email", "hobbies"],
  3
);

console.log(txt);

const myself = `{
  "firstName": "Kelechi",
  "lastName": "Anomneze",
  "age": 26,
  "country": "Nigeria",
  "city": "Lagos",
  "email": "kanomneze@gmail.com",
  "hobbies": [
     "watch football",
     "playing table",
     "coding"
  ]
}`;

const newself = JSON.parse(myself, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(newself);
