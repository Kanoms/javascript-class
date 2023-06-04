const myself = ["Kelechi", "Anomneze", "27", "false"];

let [firstName, lastName, age, isMarried] = myself;

console.log(firstName, lastName, age, isMarried);

const userDetails = {
  name: "Kelechi",
  age: 27,
};

let { name: fullname } = userDetails;

console.log(fullname);
