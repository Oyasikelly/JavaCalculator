"use strict";
const screen = document.querySelector(".screen");
const buttons = Array.from(document.querySelectorAll(".Number"));

screen.style.fontSize = "20px";
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case ">":
        screen.innerText = screen.innerText.slice(0, -1);
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Error";
        }
        break;
      case "%":
        let percentage = screen.innerText * 0.01;
        screen.innerText = eval(percentage);
        break;
      case "Sqr":
        screen.innerText = Math.sqrt(screen.innerText);
        break;
      case "^2":
        if (e.target.innerText) {
          screen.innerText = screen.innerText ** 2;
        }
        break;
      default:
        screen.innerText += e.target.innerText;
        const screenValueArray = Array.from(screen.innerText);
        let screenValues = [];
        let check = screenValueArray.length;
        if (check > 0 && check < 30) {
          for (let i = 0; i < screenValueArray.length; i++) {
            screenValues += screenValueArray[i];
          }
          screen.innerText = screenValues;
        } else if (check >= 30) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
    }
  });
});
