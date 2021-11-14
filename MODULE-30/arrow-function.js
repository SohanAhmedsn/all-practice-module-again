//function declaration-111

function add(num1, num2) {
    return num1 + num2;
}

//function expression --2
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

//function expression anonymous---333
const add3 = function(num1, num2) {
        return num1 + num2;
    }
    //arrow function ----44444
const add4 = (num1, num2) => num1 + num2;


//answer the console.log 
const sum1 = add(15, 17);
const sum2 = add(15, 17);
const sum3 = add(15, 17);
const sum4 = add(15, 17);
console.log(sum1, sum2, sum3, sum4);