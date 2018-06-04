function Stark(name, age, hairColor){
	this.name = name;
	this.age = age;
	this.hairColor = hairColor;
	this.lastName = "Stark";

	this.greetings = function(){
		console.log("Hello, I am "
			+ this.name + ' ' 
			+ this.lastName);
	}
}

var ned = new Stark("Ned", 40, "Brown");
ned.greetings();

var sansa = new Stark("Sansa", 13, "Red");
sansa.greetings();