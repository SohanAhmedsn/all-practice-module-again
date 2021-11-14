/* //1. let and const 


const hubby = 'Omor sani';
let phone = 'Iphone 15';
phone = 'Samsung Galaxy s17';

const myNotes = `I am monju of ${hubby}. I don't know have a lily`;
// console.log(myNotes);
//2. default parameter
//defalut parameter 
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;

} */
// const biggest = maxNumber();
// console.log(biggest);
// const square = x => x * x;
// console.log(square(9));




/*
 Module: 29_2
29/2 

destructing.js file name:


const { phone, price, dress, id } = {
    id: 58,
    name: 'King fish',
    price: 9000,
    phone: 5465654156,
    address: 'chadpur',
    dress: 'silver'
};

{object }
I mean that have "{}" use the object: 
less to large made to object so it called the  destructuring

*/

/* 

const fish = {
    id: 58,
    name: 'King fish',
    price: 9000,
    phone: 5465654156,
    address: 'chadpur',
    dress: 'silver'
};

// const phone = fish.phone;
// const price = fish.price;
// const id = fish.id;
// const address = fish.address;
// const dress = fish.dress;
// console.log(phone, price, id, address, dress);
// console.log(phone, price, id, address, dress);
// console.log(phone, price, id, address, dress);
const { phone, price, dress, id } = fish;
console.log(phone, price, dress, id); 









*/

/* 
const company = {
        name: 'GP',
        ceo: {
            id: 1,
            hisName: 'ajmal',
            food: 'fuckha'
        },
        web: {
            work: 'website dev',
            employee: 22,
            frameWork: 'react',
            tech: {
                first: 'html',
                sec: 'css',
                third: 'js'
            }

        }
    }
    // const work = company.web.work;
    // const frameWork = company.web.frameWork;

const { tech } = company.web.tech.first;
const { work, frameWork } = company.web;
const { food } = company.ceo;

const { sec, third } = company.web.tech;
console.log(work, frameWork, food);
console.log(sec, third); */






/* 

class: 31_3  

changing.js



*/



//declare variable based on the name of an object a property


// const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
// const { x, b } = myObject;
// console.log(b);





//test the "var" option 
// var i = 13;
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log('value ' + i);

//answer: 0
// 1
// 2
// 3
// 4
// value 5


//test the let option

// let i6 = 13;
// for (let i6 = 0; i6 < 5; i6++) {
//     console.log(i6);
// }
// console.log('value ' + i6);

// result :
// 0
// 1
// 2
// 3
// 4
// value 13





/*\

-----------------------------------
*/

/* (function aDemofunc() {
        var msg = 'Hello';
        console.log(msg);
    }
    ());

(function adDemmoOne() {
    var msgOne = "Hello I'm Message one";
    console.log(msgOne);
}()); */



/* onsole.log(min([1, 3, 2]))

function min(nums) {
    return Math.min(nums)

}; */


/* const cube = x => x * x * x;
console.log(cube(2)); */

// const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
// friends.find(friend => friend.length == 5);
// console.log(friends);

// const product = { name: ‘Laptop’, model: '’Yoga 3’', price: 49000, dusk: ‘512 SSD’ };
// const { product.price } = product;
// console.log(product)


/* {
    let a = 5;
    let b = 10;
    const pi = 3.1416;
    console.log(a + b + pi);
}
 */
/* 
{
    let c = 10;
    let d = 5;
    const pi = 3.1416;

}
console.log(c + d + pi) */

/* 
no error that time I can "var" but I cant use the let/const that time I can error;
{
    var myName = function() {
        var a = 'Zonayed Ahmed';
        console.log(a)
    }
}
myName(); */

/* 
{
    var myName6 = function() {

        var b = 'Zonayed Ahmed';
        console.log(b);
    }
}
myName6(); */









/* 
//template Literal 
var name = 'Zonayed Ahmed';
age = 21;
work = 'student';
// console.log(`My name is ' +  name + 'and I\'m  + age  + years old! Currenty I\'m a = work`);
// console.log(`My name is ${name} and I\'m ${age} years old! Currently I\'m a ${work}`); */

/* function claculateAge(dob) {
    return `I'm ${2018-dob} years old!`;
}
claculateAge(); */


// console.log(`hello world how are you!
// I am find.....and you?`);

// var paraOne = `This is paragraph 
// !This is another paragraph 
// ..
// This is another again paragraph 
// ...
// Again another yet paragerph..
// ...
// ----
// ????`
// console.log(paraOne);





//use the "startsWith()"
const start = 'My name is Khan';
const startOne = start.startsWith('My');
// console.log(startOne);
// true

const startToYou = 'Hey are you here!!!';
const starTwo = startToYou.startsWith('My');
// console.log(starTwo);



//use the "endsWith"
const end = 'I love Bangladesh';
endTest = end.endsWith('love');
// console.log(endTest)


const inc = 'I love programming with javascript';
const incTest = inc.includes('with');
// console.log(incTest)

const fucntionOne = () => console.log('Hey, hello you are ????');

const fucntionTwo = () => console.log('Hi');
const functionThree = () => console.log('By');
const functionFour = () => console.log('I do not know');
const functionFive = () => console.log('I want to know');
// fucntionOne();
// fucntionTwo();
// functionThree();
// functionFour();
// functionFive();


const dobOne = [1995, 1996, 1997, 1998, 1999];
