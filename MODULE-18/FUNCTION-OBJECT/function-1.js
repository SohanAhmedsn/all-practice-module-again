// var x = 5;
// var y = 6;
// console.log(x + y);

/* 
let mood = "light";
console.log(mood);
//light 
mood = "dark";
console.log(mood); */

/* let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); */


/* console.log(Math.max(2, 4)); */



/* console.log(Math.min(2, 4) + 100); */



/* let theNumber = Number("Pick a number");
console.log("Your number is the square root of " + theNumber * theNumber); */

/* let number = 0;
while(number <=12) {
    console.log(number);
    number = number +2;
} */




// doing the math 2 to the power 10..
/* let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}


console.log(result); */

/* //same problem solving for loop 
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;

}
console.log(result);
 */


/* //let use the break 
for (let x = 0; x++) {
    if (x % 7 == 0) {
        console.log(x);
        break;
    }
} */



// const makeNoise = function() {
//     console.log('Pling');
// }
// makeNoise();










const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 10));