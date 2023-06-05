// Call the elements from HTML
const input = document.getElementById("inputNumber");
const validateText = document.getElementById("validationText");
const button = document.getElementById("submitNumber");
const numberContainer = document.getElementById("numbersContainer");

// Validate user input on button click
button.addEventListener("click", (event) => {
  //stopping page refresh
  event.preventDefault();
  // take user input and change it a number
  const inputValue = parseInt(input.value);

  if (input.value === "") {
    validateText.textContent = "Oga enter a value";
    input.style.border = "1px solid green";
  } else if (isNaN(inputValue)) {
    validateText.textContent = "Oga enter a number not strings";
    input.style.border = "1px solid green";
  } else {
    validateText.textContent = "";
    numberContainer.innerHTML = "";

    const isPrime = (number) => {
      // Added function to get prime numbers
      if (number <= 1) {
        return false;
      }

      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }

      return true;
    };

    for (let i = 1; i <= inputValue; i++) {
      const span = document.createElement("span");
      span.textContent = i;

      if (isPrime(i)) {
        span.style.backgroundColor = "#007fff";
        span.style.color = "azure";
      } else if (i % 2 === 0) {
        span.style.backgroundColor = "green";
        span.style.color = "yellow";
      } else {
        span.style.backgroundColor = "red";
        span.style.color = "white";
      }

      input.style.border = "2px solid red";

      span.style.border = "1px solid " + span.style.backgroundColor;
      span.classList.add("span_fix");

      numberContainer.appendChild(span);
    }

    localStorage.setItem("numberSpans", numberContainer.innerHTML);
  }
});

// Retrieve number spans from localStorage on page load
window.addEventListener("load", () => {
  const storedSpans = localStorage.getItem("numberSpans");
  if (storedSpans) {
    numberContainer.innerHTML = storedSpans;
  }
});

// Clear validation text when user starts typing
input.addEventListener("input", () => {
  validateText.textContent = "";
  input.style.border = "1px solid green";
});

// Clear input field on page refresh
window.addEventListener("beforeunload", () => {
  input.value = "";
});
