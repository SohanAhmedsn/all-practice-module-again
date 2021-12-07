btnHandleToColorChangeRed = () => {
  document.body.style.backgroundColor = "red";
};
btnHandleToColorChangeYellow = () => {
  document.body.style.backgroundColor = "yellow";
};

///make blue btn

const blueButton = document.getElementById("make-blue-btn");
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "white";
}

const crimsonBtn = document.getElementById("make-crimson-btn");
crimsonBtn.onclick = crimsonButton;
function crimsonButton() {
  document.body.style.backgroundColor = "crimson";
  document.body.style.color = "white";
}

//make green

const makeGreen = document.getElementById("make-green-btn");
makeGreen.onclick = greenButton;
function greenButton() {
  document.body.style.backgroundColor = "green";
}

//make black

const makeBlack = document.getElementById("make-black-btn");
makeBlack.onclick = blackButton;
function blackButton() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

// //Call back and higher order function

// function square(x) {
//     console.log(`square of ${x}: ${x * x}`);
// }
// square(8);

// // const y = square;
// // y(8);

// function higherOrderFucntion (num,callback) {

// }

// higherOrderFucntion(6, square)
