//wood


/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 2, 3);
console.log(firstOption);





//leap year and


function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);




/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 2, 3);
console.log(firstOption);























for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}








function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(63, 67);
// console.log(firstTotal);
const secondTotal = add(54, 981);
// console.log(secondTotal);
const thirdTotal = add(12, 14);
console.log(thirdTotal);

function multiply(num1, num2) {
    console.log('parameters', num1, num2);
    const result = num1 * num2;
    return result;
}

const firstResult = multiply(13, 12);
console.log(firstResult);



function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -17]);
console.log('oldest2', oldest2);

// Task: find the lowest or smallest element of an array
















  
var onionPrice = 43;
var eggPrice = 10;
var eggQuantity = 7;
var totalPrice = onionPrice + eggPrice;
var priceDifference = onionPrice - eggPrice;
var eggPriceMultiplication = eggPrice * eggQuantity;

// console.log(onionPrice);
// console.log(eggPrice);
// console.log(onionPrice + eggPrice);
// console.log(totalPrice);
// console.log(priceDifference);
// console.log(eggPriceMultiplication);

var moneyAvailable = 100;
var orangePrice = 5;
var orangeQuantity = moneyAvailable / orangePrice;
// console.log(orangeQuantity);

// special edition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
total = total.toFixed(1);
total = parseFloat(total);
// console.log(total);

// modulus
var mangoes = 57;
var hungryPerson = 12;
var dividing = mangoes / hungryPerson;
console.log(dividing);
var remaining = mangoes % hungryPerson;
console.log(remaining);












  
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(63, 67);
// console.log(firstTotal);
const secondTotal = add(54, 981);
// console.log(secondTotal);
const thirdTotal = add(12, 14);
console.log(thirdTotal);

function multiply(num1, num2) {
    console.log('parameters', num1, num2);
    const result = num1 * num2;
    return result;
}

const firstResult = multiply(13, 12);
console.log(firstResult);












const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
// console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([32, 45, 67]);
console.log('array total', total)






//---------------------------------------------










function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);

var nanaInches = 168;
var feet = nanaInches / 12;



// mile to km
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);














var gotJob = false;
var moneySaved = 50000;
var hasFlat = false;
var hasHouse = true;

// if (gotJob == true && moneySaved > 200000) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!!')
// }

// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!!')
// }

// if (gotJob == true || moneySaved > 200000) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!!')
// }

if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('Cholo biya kore feli!!');
}
else {
    console.log('Tor kopale biya nai!!!')
}







/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 2, 3);
console.log(firstOption);











const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'shaomi m3', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo a2', price: 17000, camera: 8, storage: 32 },
    { name: 'nokia n95', price: 8000, camera: 8, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 16 }
];

let cheapest = phones[0];
for (const phone of phones) {
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);











for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if (i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}




  
const greetings = 'Hello, how are you?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
}
const reversed = reverseString(greetings);
console.log(reversed);















function largestElement(numbers) {
    let max = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
}

function smallestElement(numbers) {
    let min = numbers[0]; // 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
}



























const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 }
];

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);



















function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12, -6, -17]);
console.log('oldest2', oldest2);

// Task: find the lowest or smallest element of an array















