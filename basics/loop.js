// for, for in, while, do while

//while
var x = 0;

while (x <= 10){
	console.log("x = " + x);
	x ++;
}

//do while
var x = 0;

do {
	console.log("x = " + x);
	x ++; 
} while (x < 10);

//for
for (var y = 0; y < 10; y++){
	console.log("y = " + y);
}

//for in
var obj = {
	name: 'John',
	lastName: 'Snow'
}

for(var prop in obj){
	console.log(obj[prop]);
}