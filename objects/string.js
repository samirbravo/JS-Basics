var s = "The winter is coming. It's really coming!";

console.log(s.length);

console.log(s.indexOf('coming'));
console.log(s.lastIndexOf('coming'));

console.log(s.slice(4, 10));
console.log(s.slice(4, -8));

console.log(s.substr(4, 17));

console.log(s.replace('winter', 'summer'));

console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.log(s.concat('!', '!'));

var s = "Ned, Jon, Sansa, Robb, Bran, Arya, Rickon";
console.log(s.split(", "));