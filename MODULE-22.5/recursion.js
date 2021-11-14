//module no 22.5 bonus module for

//Classs:---------lecture 22.5_1; 

// for increment 
// let sum = 0;
// for (let i = 1; i <= 6; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 6; i >= 1; i--) {
//     sum = sum + i;

// }
// console.log(sum);

// ai kaj jodu amra vinno vave kori function


/* function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i;
}
console.log(sum(6));


//tryOne time               

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return sum(i - 1) + i;
}
console.log(sum(6));
 */

//tryTwo Times 

// function sum(i) {
//     if (i == 1) {
//         return 1;
//     }

//     return i + sum(i - 1);
// }
// console.log(sum(8));


//truThird times 
// function sum(i) {
//     if (i == 1) {
//         return 1;
//     }
//     return i + sum(i - 1);

// }

// console.log(sum(6));























//class: 22.5_2: Explore factorial recursion using a for loop concept

// 6!= 6*5*4*3*2*1

/* //declared the name : factorial-recursion.js
let factorial = 1;
//multiuply korer jonno 1 nite hbe; sum korer jonno 0 nite hbe;
for (let i = 6; i >= 1; i--) {
    factorial = factorial * i;
}

console.log(factorial); */



// //function task: 

// function factorial(n) {

//     if (n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);

// }
// console.log(factorial(6));

// // tryOne time
// function fact(n) {
//     if (n == 1) {
//         return 1;
//     }

//     return n * fact(n - 1);
// }
// console.log(fact(6));


//tryTwo Time


// function factorialNumberOutput(n) {
//     if (n == 1) {
//         return 1;
//     }

//     return n * factorialNumberOutput(n - 1);
// }
// console.log(factorialNumberOutput(6));


// try Third times 

// function fact(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * fact(n - 1);
// }
// console.log(fact(6));



/*  end---------------------------------------------*/






//22.5_3: fibonacci element using recursion and recursion conscept 
//[0, 1, 1, 2, 3, 5, 8, 13, 23, 36]

// const fibo = [0, 1];
// for (let i = 2; i <= 6; i++) {
//     // fibo[2] = fibo[1] + fibo[0];
//     // fibo[3] =fibo[2] +fibo[1];
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

/* 

const fibo = [0, 1];
for (let i = 2; i <= 6; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); 

*/



// //not currect
// function fibo(0, n) {
//     if (n == 2) {
//         return 2;
//     }
//     return fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

/*
position number fobonacci number 
   [0=0th, 
   1=1th, 
   1=2th, 
   2=3th, 
   3=4th, 
   5=5th, 
   8=6th, 
   13=7th, 
   21=8th, 
   34=9th
   55= 10th, 
   89=11th,
   144=12th;
   233= 13th; 
   377= 14th;
]
*/
/* function fibo(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }

    return fibo(i - 1) + fibo(i - 2);
}
console.log(fibo(6)); //6th position 8;

//tryToOne Time 
function fibonacciNumber(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1;
    }

    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(1));
console.log(fibonacciNumber(2));
console.log(fibonacciNumber(3));
console.log(fibonacciNumber(4));
console.log(fibonacciNumber(5));
console.log(fibonacciNumber(6));
console.log(fibonacciNumber(7));
console.log(fibonacciNumber(8));
console.log(fibonacciNumber(9));
console.log(fibonacciNumber(10));
console.log(fibonacciNumber(11));
console.log(fibonacciNumber(12));
console.log(fibonacciNumber(13));
console.log(fibonacciNumber(14));
console.log(fibonacciNumber(15));
console.log(fibonacciNumber(16));
console.log(fibonacciNumber(17));
console.log(fibonacciNumber(18));
console.log(fibonacciNumber(19));
console.log(fibonacciNumber(20));
console.log(fibonacciNumber(21));
console.log(fibonacciNumber(22));
console.log(fibonacciNumber(23));
console.log(fibonacciNumber(24));
console.log(fibonacciNumber(25));
console.log(fibonacciNumber(26)); 



*/


























//--------------------------------------------------------------------------------------------------------//

/* class : 22_5_3:advance find the mactching products by searching product  
 */


/* 

const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 13000 },
    { name: 'apple smart watch', price: 14000 },
    { name: 'basundara binding papper', price: 15000 },
    { name: 'lg smart phone', price: 16000 },
    { name: 'samung watch', price: 17000 },
    { name: 'dell laptop', price: 12000 },
    { name: 'HP laptop', price: 22000 },
    { name: 'google watch', price: 23000 },
    // {name: 'samsung s3 phone', price: 12000},
    // {name: 'samsung s3 phone', price: 12000},
]

function searchProducts(products, searchText) {
    // console.log(products, searchText);
    // for (const product of products) {
    //  if(product.name.indexOf(searchText) !=-1)
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;



}

const matched = searchProducts(products, 'laptop');
console.log(matched); */


//








// class: 22_5-5:Explore break and continue for selling 


const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'asus laptop d34', price: 13000 },
    { name: 'apple smart watch', price: 14000 },
    { name: 'basundara binding papper', price: 15000 },
    { name: 'lg smart phone', price: 16000 },
    { name: 'samung watch', price: 17000 },
    { name: 'dell laptop', price: 12000 },
    { name: 'HP laptop', price: 22000 },
    { name: 'google watch', price: 23000 },
    // {name: 'samsung s3 phone', price: 12000},
    // {name: 'samsung s3 phone', price: 12000},
];

//use the break 
// for (const product of products) {
//     if (product.price > 15000) {
//         break;
//     }
//     console.log(product);

// }

for (const product of products) {
    if (product.price < 1000) {
        continue;
    }
    console.log(product);
}