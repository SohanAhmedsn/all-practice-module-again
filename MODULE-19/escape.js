/*
\' = Single code; 
\" = Double code;
\\ = Backslash;

*/

// let text = 'We are the so-called \"Viking\" from the north.';
// console.log(text);

// let text1 = "It\'s alright.";
// console.log(text1);

// let text2 = "It\'s may be alright.";
// console.log(text2);

// let text3 = "The character \\ is called backslash.";
// console.log(text3);

// let text4 ="Hello\ Dolly!";
// console.log(text4);



// escape sequences: 
// \b = Backspace;



// \f = Form Feed;

// \n = New Line;

// \r = Carriage Return;

// \t = Horizontal Tabulation;

// \v = Vartical Tabulation;









// function seerToFeet(seer) {
//     var feet = seer / 12;
//     return feet;
// }
// var myseer = 10;
// var feet = seerToFeet(seer);
// console.log(feet);

// function seerToMon(seer) {
//     return (parseInt(seer * 40));
// }

// console.log(seerToMon(5));



// shirt, pant, shoe 
function totalSales(quantityOfTshirt, quantityOfPant, quantityOfShoe) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    // Cloth calculation
    const totalTshirt = quantityOfTshirt * perShirtPrice;
    const totalPant = quantityOfPant * perPantPrice;
    const totalShoe = quantityOfShoe * perShoePrice;
    // total value 
    const totalValue = totalTshirt + totalPant + totalShoe;
    return totalValue;
}

const totalPriceOfCloth = totalSales(1, 1, 1);
console.log(totalPriceOfCloth);