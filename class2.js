const male = 9;
const female = 2;
const isPresentAll = true;

let add = male + female;
let substract = female - male;
let multiple = male * female;
let divide = male / female;
let remainder = male % female;
let exponentiation = male ** female;
let mult = 2 * 4;
let mult2 = 2 ** 4;

const noOfFM = {
  male,
  female,
};

const colorWorn = [
  "black", "gray", "pink", "evans", "green", "ghanaColor"
];

console.log(typeof male, typeof female, typeof isPresentAll, typeof noOfFM, typeof colorWorn);

console.log(add, substract, multiple, divide, remainder, exponentiation, mult, mult2)

console.log(add++ , add++, add++)