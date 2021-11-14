//Programming_hero
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


// program to generate fibonacci series up to n terms

// take input from the user
// const number =1;
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

function fibonacci(num) {
    if (num <= 1) return 1;


    return fibonacci(num - 1) + fibonacci(num - 2);
}