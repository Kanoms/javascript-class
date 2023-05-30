// LEVEL 1
// 1
const firstPara = document.querySelector("p");
console.log(firstPara);

// 2
const firstParaId = document.querySelector("#first-para");
const secondParaId = document.querySelector("#second-para");
const thirdParaId = document.querySelector("#third-para");
console.log(firstParaId, secondParaId, thirdParaId);

// 3
const allPara = document.querySelectorAll("p");
console.log(allPara);

// 4
for (let i = 0; i < allPara.length; i++) {
  console.log(allPara[i].textContent);
}

// 5
for (let i = 0; i < allPara.length; i++) {
  if (i === 3) {
    allPara[i].textContent = "Fourth Paragraph";
    console.log(allPara[i]);
  }
}

// 6

for (let i = 0; i < allPara.length; i++) {
  allPara[0].setAttribute("class", "first-paragraph");
  allPara[0].setAttribute("id", "firstPara");

  allPara[1].className = "second-paragraph";
  allPara[1].id = "secondPara";

  allPara[2].className = "third-paragraph";
  allPara[2].setAttribute("id", "thirdPara");

  allPara[3].classList.add("fourth-paragraph");
  allPara[3].id = "fourthPara";

  console.log(allPara[i]);
}
