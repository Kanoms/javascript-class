const changeP = document.getElementById("btn");

const para = document.getElementById("para");

changeP.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log("clicked");
  para.classList.add("changetext");
  changeP.classList.add("changebutton");
  para.style.backgroundColor = "blue";
  para.style.color = "white";
  changeP.textContent = "new Action";
});
