

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var game = {};

game.init = function() {
  setupModeButtons();
  setupSquares();
  resetButton.addEventListener("click", function() {
    reset();
  })
  reset();
}

game.init();
function setupModeButtons() {
  // mode button event listeners
  modeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      numSquares = this.textContent === "Easy" ? 3 : 6;
      reset();
    });
  });
}

function setupSquares() {
  squares.forEach(function(square, i) {
    // add click listeners
    square.addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  });
}

function changeColors(color) {
  squares.forEach(function(square) {
    square.style.backgroundColor = color;
  });
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick new random color
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  // change color of squares
  squares.forEach(function(square, i) {
    if (colors[i]) {
      square.style.display = "block";
      square.style.backgroundColor = colors[i];
    } else {
      square.style.display = "none";
    }
  });
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  
  for (var i = 0; i < num; i++) {
    // push random color into array
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  // pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 255);
  // pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 255);
  // pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}