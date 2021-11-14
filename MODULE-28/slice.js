//use the split 
const userName = 'Bangla';
//----------------012345
const nameSlice = userName.split();
console.log(nameSlice);

//result: [ 'Amer', 'soner', 'bangla', 'ami', 'tomai', 'vlobashi' ];

//use the slice 
const withoutB = userName.slice(1, 5);
console.log(withoutB);

//result: ang "Bangla"
//              ang 
// const userName = 'Bangla';
//substract the "B" then  remain "angl" 
//-------------------012345