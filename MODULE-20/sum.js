/* const numbers = [20, 25, 30, 35, 40];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    //  sum = sum + element; 
}

// console.log(element); */

// const numbers = [20, 25, 30, 35, 40, 45, 60, 65, 70];

/* 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    return sum;
}
const total = arrayTotal(10, 20, 30);
console.log(total); */

/* function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([10, 20, 30]);
console.log(total); */

// var mathMatrix = 13.67;
// var mathFloor = Math.floor(mathMatrix);
// console.log(mathFloor);

// const number = -78;
// const answer = Math.abs(number);
// console.log(answer);
/* const math = 12.96;
const answer = Math.floor(math);
console.log(answer); */

/* let a = 2 + 2;
switch (a) {
    case 3:
        console.log('To small');
        break;
    case 4:
        console.log('Exactly!');
        break;

    case 5:
        console.log('To big');
        break;
    default:
        console.log("I don't know such value!")

} */

let a = 3;
switch (a) {
    case 4:
        console.log('Right');
        break;

    case 3:
    case 5:
        console.log('Wrong');
        console.log('Why do not you take a math class?');
        break;
    default:
        console.log('The result is strange, Really...');
}