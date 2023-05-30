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

// LEVEL 2
// 1
for (let i = 0; i < allPara.length; i++) {
  allPara[0].style.color = "red";
  allPara[0].style.background = "blue";
  allPara[0].style.border = "solid";
  allPara[0].style.fontFamily = "Arial";
  allPara[0].style.fontSize = "36px";

  allPara[1].style.color = "white";
  allPara[1].style.background = "gray";
  allPara[1].style.border = "solid";
  allPara[1].style.borderColor = "black";
  allPara[1].style.fontFamily = "Georgia";
  allPara[1].style.fontSize = "32px";

  allPara[2].style.color = "green";
  allPara[2].style.background = "yellow";
  allPara[2].style.border = "solid";
  allPara[2].style.fontFamily = "Times New Roman";
  allPara[2].style.fontSize = "28px";

  allPara[3].style.color = "orange";
  allPara[3].style.background = "green";
  allPara[3].style.border = "dashed";
  allPara[3].style.borderColor = "black";
  allPara[3].style.fontFamily = "Courier New";
  allPara[3].style.fontSize = "20px";
}

// 2
for (let i = 0; i < allPara.length; i++) {
  if (i === 0 || i === 2) {
    allPara[i].style.color = "green";
  }

  if (i === 1 || i === 3) {
    allPara[i].style.color = "red";
  }
}

// 3
for (let i = 0; i < allPara.length; i++) {
  allPara[0].setAttribute("class", "first-pg");
  allPara[0].setAttribute("id", "firstP");
  allPara[0].textContent = "This is the first Paragraph";

  allPara[1].className = "second-pg";
  allPara[1].id = "secondP";
  allPara[1].textContent = "This is the second Paragraph";

  allPara[2].className = "third-pg";
  allPara[2].setAttribute("id", "thirdP");
  allPara[2].textContent = "This is the third Paragraph";

  allPara[3].classList.add("fourth-pg");
  allPara[3].id = "fourthP";
  allPara[3].textContent = "This is the fourth Paragraph";
}
