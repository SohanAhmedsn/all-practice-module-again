//declararion the arraw function
// two parameter 
const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
// console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 3);
// console.log(result)


//ten time 

const tenTimes = (num) => num * 10;
const output = tenTimes(17);
// console.log(output)

//without bracket use the arrow functio 
const fiveTime = num => num * 5;
const value = fiveTime(17);
// console.log(value)


const getName = () => 'Brandon Sam';
const name = getName();
console.log(name);