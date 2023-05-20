function getDetails() {
  let firstName = "Kelechi";
  let space = " ";
  let lastName = "Anomneze";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(getDetails());

function addTwoNum(a, b) {
  let result = parseFloat(a) + parseFloat(b);
  if (parseFloat(a) + parseFloat(b) > 10) {
    return `${result} is greater than a decade`;
  } else {
    return `${result} is less than a decade`;
  }
}

console.log(addTwoNum(10.5, 5));

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = number.length; i > 0; i--) {
  console.log(i);
}

// Arrow function
const square = (n) => {
  return n * n;
};

console.log(square(2)); // -> 4
