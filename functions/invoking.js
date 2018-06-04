function sayHi(name){
	console.log("Hi, " + name);
}

sayHi("Rikon");

sayHi.call({}, "Arya");

sayHi.apply({}, ["Ned"]);

//self-invoking
(function(){
	var a = 1;
	console.log(a);
})();
