/* const business = 450;
const minister = 500;
const army = 600;

if (business > minister && business > army) {
    console.log("Businessman is rich man");
} else if (minister > business && minister > army) {
    console.log("Minister is rich Man");
} else if (army > business && army > minister) {
    console.log("Army is Rich Man");
} */


/* var a = 20;
var b = 30;
var c = 40;
var d = 50;

if (a > b && a > c) {
    console.log("A is Bigger");
} else if (b > a && b > c) {
    console.log("B is Bigger");
} else if (c > a && c > b) {
    console.log("C is Bigger");
} */

/* function findLargestNumber(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}
const largestNumber = findLargestNumber(50, 70);
console.log(largestNumber); */


/* function findOutTheLargestNumber(one, two) {
    if (one > two) {
        return one;
    } else if (two > one) {
        return two;
    }
}
const findOutPut = findOutTheLargestNumber(99, 199);
console.log(findOutPut);
 */

/* function findNumbers(first, second, third) {
    if (first > second && first > third) {
        return first;
    } else if (second > first && second > third) {
        return second;
    } else if (third > second && third > first) {
        return third;
    }
}

const biggerNumber = findNumbers(25, 100, 200);
console.log(biggerNumber); */

function findTheSmallNumber(one, two, three) {
    if (one < two && one < three) {
        return one;
    } else if (two < one && two < three) {
        return two;

    } else if (three < one && three < two) {
        return three;
    }

}

const findOutTheNumber = findTheSmallNumber(10, 20, 30);
console.log(findOutTheNumber);