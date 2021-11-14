// system 22222222222222222222222222: 

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//system 333333333333333333333333333333:
//handle blue button click by setting function name to red


const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton);
//jst  set the name of the function 

//not use the makeBlue after first bracket 
//if you use the load after color change 

//call kintu korba na just name bosia diba  asle
//makeBlue() means called 
//makeBlue not a call 
blueButton.onclick = makeBlue; //click me color to blue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}












//handle event anonymous function  444444444444444444444
const greenButton = document.getElementById('make-green-button');
// console.log(greenButton);


//tmi makeGreen() name naw dite paro tabu o kaj korbe

// //use like that  greenButton.onclick = function() 
//95% a [function greeButton()] ar place a sude function () deya k bole anonymous function
//Or,
// //use like that  greenButton.onclick = function greenButton() 

// 


greenButton.onclick = function() {
    document.body.style.backgroundColor = 'green';
}








//hande by addEventListener propery 55555555555555555555 

const goldenButtton = document.getElementById('make-goldenrod');
// console.log(goldenButtton);

goldenButtton.addEventListener('click', makeGodenRod)

function makeGodenRod() {
    document.body.style.backgroundColor = 'goldenrod'
}










//handle the addEventListener 6666666666666666666          


const hotPinkButton = document.getElementById('make-hotpink');
// console.log(hotPinkButton);

hotPinkButton.addEventListener('click', function makePink() { //don't use the makePink after the function
    document.body.style.backgroundColor = 'hotpink';
})







////besi use korbo **************

//direct shortcut 7777777777777777
document.getElementById('light-blue').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightBlue'
})