window.addEventListener("DOMContentLoaded", (event) => {
  const inputText = document.getElementById("input-text");
  const inputKeyCode = document.getElementById("input-keycode");

  // Display initial message
  inputText.textContent = "Enter any Keyboard Key";
  inputKeyCode.style.display = "none";

  // Event listener for keydown event
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    const keyCode = event.keyCode;

    inputText.textContent = `You pressed ${keyName}`;
    inputKeyCode.style.display = "block";
    inputKeyCode.textContent = keyCode;
    inputKeyCode.classList.add("green-text");

    if (keyCode === 32) {
      const space = "Space";
      inputText.textContent = `You pressed ${space}`;
      space.classList.add("green-text");
    }
  });
});
