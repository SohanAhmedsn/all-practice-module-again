//farenheit to celcius  
// function c (f) {
//     return (5/9) * (f-32);
// }
// var d = c(77);
// console.log(d);

// function toCelsius1(farenheit1){
//     return (5/9) * (farenheit1 -32);
// }

// var outPut2 = toCelsius1(100);
// console.log(outPut2);

// console.log("The tempreture is " + toCelsius(77) + " Celsius");


// function toCelsius(farenheit) {
//     return (5/9) * (farenheit -32); 
// }


// function convertFahrenheitToCelsius(tempreture) {
//     return  (5 * 9) /(tempreture - 32);
// }
// var outPut4 = convertFahrenheitToCelsius(25);
// console.log(outPut4);


function cToF(celcius) {
    var cTemp = celcius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + " " + cToFahr + " " ;
    console.log(message)
}
function fToC(farenheit5){
    var fTemp = farenheit5;
    var fTocel = (fTemp -32) * (5 / 9);
    var message = fTemp + " " + fTocel + " ";
    console.log(message)

}
cToF(60);
fToC(45);