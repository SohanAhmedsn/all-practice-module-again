/* var first = 50;
var second = 70;
// console.log(first, second);
temp = first;
first = second;
second = temp;
console.log(first, second); */


// Destructing: 
// var firstOne = 5;
// var secondTwo = 7;
// [firstOne, secondTwo] = [secondTwo, firstOne]
// console.log(firstOne, secondTwo);
// function deliveryCost(shirtQuantity) {
//     let deliveryCharge = [100, 80, 50];
//     let totalDelivery = 0;
//     if (shirtQuantity < 0) {
//         return 'invalid'

//     } else if (shirtQuantity <= 100) {
//         return totalDelivery += deliveryCharge[0] * shirtQuantity;
//     } else if (shirtQuantity <= 200) {
//         return totalDelivery += (deliveryCharge[0] * 100) + (deliveryCharge[1] * (shirtQuantity - 100));
//     } else if (shirtQuantity >= 201) {
//         return totalDelivery += (deliveryCharge[0] * 100) + (deliveryCharge[1] * 100) + (deliveryCharge[2] * (shirtQuantity - 200));

//     }
// }
// const shirtQuantityDelivery = deliveryCost(-10);
// console.log('delivery cost' + " " + shirtQuantityDelivery);

/* //Question no: 3
//shirt <=100 *100; 
//shirt <=200 -[0] *100; [1]*80;[2] *50;

function deliveryCost(shirtQuantity) {
    let deliveryCharge = [100, 80, 50];
    let totalDelivery = 0;
    if (shirtQuantity < 0) {
        return "please, check the shirt quantity";

    } else if (shirtQuantity <= 100) {
        return totalDelivery += deliveryCharge[0] * shirtQuantity;
    } else if (shirtQuantity <= 200) {
        return totalDelivery += (deliveryCharge[0] * 100) + (deliveryCharge[1] * (shirtQuantity - 100));
    } else if (shirtQuantity >= 201) {
        return totalDelivery += (deliveryCharge[0] * 100) + (deliveryCharge[1] * 100) + (deliveryCharge[2] * (shirtQuantity - 200));

    }
}
const shirtQuantityDelivery = deliveryCost(300);
console.log(shirtQuantityDelivery); */



//Question no : 4; 
// function declare the "perfectFriend"
//show your friend name which name length is greater than other name 
//start vedio 10:13


// function perfectFriend(friendNameArray) {
//     for (i = 0; i < friendNameArray.length; i++) {
//         //say choose the greater than more letter 
//         if (friendNameArray[i] == friendNameArray[3]) {
//             return friendNameArray[i];
//         }
//     }
// }
// // anu =3; arif= 4; javed=5; zahanara=8; 
// var friendsNameList = ['Anu', 'Arif', 'Javed', 'Zahanara']
// var greaterThanFriendName = perfectFriend(friendsNameList);
// console.log(greaterThanFriendName);














// let friendsNameList = ['Anu', 'mrArif', 'Javed', 'Zahanara', 'Jaman', 'Shaon', 'Olivia', 'Sophia'];

// function perfectFriend(friendNameArray) {
//     for (i = 0; i < friendNameArray.length; i++) {
//         //say choose the greater than more letter 
//         let friendNameLength = friendNameArray[i];
//         let fiveLetterName = friendNameLength;
//         if (fiveLetterName > 5) {
//             return;
//         }
//     }

// }
// // anu =3; arif= 4; javed=5; zahanara=8; 

// var greaterThanFriendName = perfectFriend(fiveLetterFriendName);
// console.log(greaterThanFriendName);











// function perfectFriend(friendNameArray) {
//     for (i = 0; i < friendNameArray.length; i++) {
//         //say choose the greater than more letter 
//         let fiveNumber = friendNameArray[i];
//         if(fiveNumber == 5) {
//             return fiveNumber;
//     }
// }
// // anu =3; arif= 4; javed=5; zahanara=8; 
// var friendsNameList = ['Anu', 'Arif', 'Javed', 'Zahanara'];
// var greaterThanFriendName = perfectFriend(friendsNameList);
// console.log(greaterThanFriendName);




// function fiveArr(array) {
//     for (var i = 0; i < fiveArr.length; i++) {
//         var temp = array[i];
//         if (temp.length == 5) {
//             return temp;
//         }
//     }
// }

// var friendsNameList = ['Anu', 'mrArif', 'Javed', 'Zahanara', 'Jaman', 'Shaon', 'Olivia', 'Sophia'];
// console.log(fiveArr(friendsNameList));



// function perfectFriend(names) {
//     let largestName = names[0];

//     for (friendName of names) {
//         if (friendName.length > largestName.length) {
//             largestName = friendName;
//         }
//     }
//     return largestName;
// }
// const names = ['tamim', 'sakib', 'emdad', 'ishrafil', 'rocky'];
// const result = perfectFriend(name);
// console.log(result);







// //question no: 4
// //find the 5 letter friend name: 

// function perfectFriend(names) {
//     let largestName = names[0];

//     for (friendName of names) {
//         if (friendName.length == 5) {
//             largestName = friendName;

//         }
//     }
//     return largestName;
// }
// const names = ['abul', 'shamad', 'eliush', 'anarulislam', 'rakib'];
// const result = perfectFriend(names);
// console.log(result);

















// function fiveArr(array) {
//     for (var i = 0; i < fiveArr.length; i++) {
//         var temp = friendsNameList[0];
//         if (temp.length == 5) {
//             return temp;
//         }
//     }
// }

// var friendsNameList = ['Anu', 'mrArif', 'Javed', 'Zahanara', 'Jaman', 'Shaon', 'Olivia', 'Sophia'];
// console.log(fiveArr(friendsNameList));

















// function seerToMon(seer) {
//     return (parseInt(seer * 40));
// }

// console.log(seerToMon(1));








function perfectFriend(names) {
    let largestName = names[0];

    for (friendName of names) {
        if (friendName.length == 5) {
            largestName = friendName;

        }
    }
    return largestName;
}
const names = ['abul', 'shamad', 'eliush', 'anarulislam', 'rakib'];
const result = perfectFriend(names);
console.log(result);