//question no: 1
//let a declared a function "seerToMon" 
// have need parameter "seer" 
//convert a mon || 40 seer = 1 mon 


function seerToMon(seer) {
    return (parseInt(seer * 40));
}

console.log(seerToMon(1));







//question No: 2
shirt = 100, pant = 200, shoe = 500;
//Declared the function
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



//Question no: 3
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
        // first 100= 100tk; second 100 =80tk;
        return totalDelivery += (deliveryCharge[0] * 100) + (deliveryCharge[1] * (shirtQuantity - 100));
    } else if (shirtQuantity >= 201) {
        //200 after = 50 
        return totalDelivery += (deliveryCharge[0] * 100) + (deliveryCharge[1] * 100) + (deliveryCharge[2] * (shirtQuantity - 200));

    }
}
//total count
const shirtQuantityDelivery = deliveryCost(300);
console.log(shirtQuantityDelivery);



//question no: 4
//find the 5 letter friend name: 

function perfectFriend(names) {
    let largestName = names[0];

    for (friendName of names) {
        if (friendName.length == 5) {
          let largestName = friendName;

        }
    }
    return largestName;
}
const names = ['abul', 'shamad', 'eliush', 'anarulislam', 'rakib'];
const result = perfectFriend(names);
console.log(result);