

//function add(num1, num2=0) {

// }



function add(num1, num2) {
    // formula 2
    num2 = num2 || 0;
    // formula One 11111
    // console.log(num1, num2)
    // if(num2 == undefined) {
    //     num2 =0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15, 17);
// const result = add(15);
console.log(result);