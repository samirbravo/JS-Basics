//hoisting for functions:
sayHi("Rob"); //it works! =)
console.log(sayHello); //undefined
console.log(sayGoodBye); //undefined

//declaring a function
function sayHi(name){
	console.log("Hello " + name);
}

sayHi("John");

//declaring a function in a var
var sayHello = function(name){
	console.log("Hello " + name);
}

sayHello("Bran");

//declaring a function by constructor
var sayGoodBye = new Function("name", "console.log('Good Bye ' + name)");

sayGoodBye("Ned");