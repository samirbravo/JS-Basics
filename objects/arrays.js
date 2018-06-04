var array = "Ned Jon Robb Bran Rickon".split(' ');
console.log(array.toString());
console.log(array.join(' | '));

array.push("Sansa");
array.unshift("Catherine");

console.log(array);

var element = array.pop();
element = array.shift();

console.log(array);
console.log(element);

array[1] = "Jon Snow";

console.log(array);

var slice = array.slice(2,4);
console.log(slice);

var splice = array.splice(1,1, "Arya", "Sansa");
console.log(array);
console.log(splice);

array.splice(3,1);
console.log(array);