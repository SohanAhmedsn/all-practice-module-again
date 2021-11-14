//Call back and higher order function 


function square(x) {
    console.log(`square of ${x}: ${x * x}`);
}
square(8);

// const y = square;
// y(8);

function higherOrderFucntion (num,callback) {

}

higherOrderFucntion(6, square)