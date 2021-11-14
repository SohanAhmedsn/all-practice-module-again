/* //max element --maximum element


function largestElement(numbers) {
    let max = numbers[0]; //
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
}







//minimum element 

// source stackflow websit 
//step to 4 site search,

function largestElement(numbers) {
    let max = numbers[0]; //
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
} */






//21_2. Remove duplicate items from an array............

//remove duplicate items from an array


//duplicate.js                
/* 
const names = ['abul', 'abul', 'cabul', 'dabul', 'fabul', 'ebul', 'gabul', 'abul', 'habul', 'dabul'];


function removeDuplicate(names) {

    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        // console.log(element);
    }

    //use the for loop alternative way....
    //f11 use kori pura element ta asbe 
    // amra jodi f10 use kori index of element asle 
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

//try again and again 2222222222222


// const nameList = ['hatem', 'jatem', 'matem', 'jafor', 'khator', 'badrul', 'ojana', 'pori', 'vutt', 'jin', 'josna', 'abuler bou'];

// function removeDuplicatOne(nameOne) {

//     const uniqueOne = [];
//     for (const elementOne of nameOnes) {
//         if (uniqueOne.indexOf(elementOnes) == -1) {
//             uniqueOne.push(elementOnes);
//         }
//     }
//     return uniqueOne;
// }

// const uniqueNameOne = removeDuplicatOne(nameOne);
// console.log(uniqueNameOne);



//try to third times .......


/* // define the 14 name 
const names = ['hatem', 'jatem', 'matem', 'jafor', 'khator', 'badrul', 'ojana', 'pori', 'vutt', 'jin', 'josna', 'abuler bou', 'hatem', 'jatem', 'matem'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        // console.log(element);
    }




    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
 */

//forth time trying to remove duplicates 4444444444444444444444444444444

const names = ['hatem', 'jatem', 'matem', 'jafor', 'khator', 'badrul', 'ojana', 'pori', 'vutt', 'jin', 'josna', 'abuler bou', 'hatem', 'jatem', 'matem'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        // console.log(element);
    }

    for (const element of names) {
        console.assert(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);