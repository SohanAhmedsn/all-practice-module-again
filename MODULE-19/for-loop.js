
// initialization i = 0;
// condition i is less than 3 
//increment i is 1 
// var i;
// for(i = 0; i < 3; i = i + 1){
//     console.log(i);
// }

// var myArray = ['A', 'B', 'C'];
// for(var i = 0; i < myArray.length; i++){
//     console.log("The member of myArray in index "+ i + " is " + myArray[i]);
// }


// var i = 10;
// while(i >= 1){
//     console.log(i + ' bottles of beer on the wall');
//     i--;
// }

// the 5-4-3-2-1 
// var i = 5;
// while(true) {
//     console.log(i + " Bottle of beer on the wall");
//     i -=1;
//     if(i == 0) {
//         break;
//     }
// }

// for (var i = 0; i < 10; i++) {
//     //check that the number is even 
//     if(i % 2 == 0) {
//         continue;
//     }
//     //if we got here, then i is odd. 
//     console.log(i + " is an odd number");
// }

// function callMyName(name, callback) {
//     var myAge =20;
//     callback(myAge);
//     console.log(name);
// }

// function hello(age){
//     console.log(age);
// }

// callMyName('Zonayed', hello);

function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('Zonayed Ahmed')('Coffee');






