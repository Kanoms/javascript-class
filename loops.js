// const nameInClass = ["Nduka", "Kelechi", "Ifeanyi", "Evans", "Dolapo", "Folarin", "Kelvin", "Justina", "Israel"];
// nameInClass.push("Juadeb");
// console.log (nameInClass);
// nameInClass.pop();
// console.log (nameInClass);
// nameInClass.shift();
// console.log (nameInClass);
// nameInClass.unshift("Juadeb");
// console.log (nameInClass);

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}
