var x = 456e5; //45600000
console.log(x.toExponential()); //4.56e7

var y = 123e-6; //0.000123
console.log(x.toExponential());

var z = 9999999999999999;
console.log(z); //15 chars at max

var hex = 0x100; //256
console.log(hex);
console.log(hex.toString(16));

var oct = 07777; //4095
console.log(oct);
console.log(oct.toString(8));

console.log(hex.toString(2));//binary


var y = 3.357;
console.log(y.toFixed(2)); //rounds
console.log(y.toPrecision(2)); //rounds



