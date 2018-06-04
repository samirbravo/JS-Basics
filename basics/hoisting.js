//Hoisting

x = 5;
var x;
// it works! JS puts the declaration first

console.log(y); //doesn't print nothing
var y = 5;
console.log(y);//print 5