var obj = {
	name: "John",
	lastName: "Snow",
	age: 16,
	sayHello: greetings
};

function greetings(){
	console.log("Hello, I am " 
		+ this.name + ' ' 
		+ this.lastName + '.');
}

console.log(obj);

console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.sayHello();


