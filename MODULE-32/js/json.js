//JavaScript Object Notation 
//JSON 
const shop = {
    shopName: 'BSO',
    owner: 'FDL',
    product: ['TV', 'Frezze', 'AC', 'Mobile'],
    place: 'Mirpur',
    speceify: {
        productOne: 'Samsung Television',
        productTwo: 'Special AC',
        service: 'First Survice'

    },
}
console.log(shop);
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const convert = JSON.parse(shopStringified);
console.log(convert)