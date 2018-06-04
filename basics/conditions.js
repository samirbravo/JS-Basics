//if(bool) { }

/*operators 
== equals
< less than
> bigger than
<= less or equals
!= different
>= bigger or equals */

var x = 20;
var y;

if (x > 18) {
	y = 'bigger';
}
else if (x == 18) {
	y = 'equal';
}
else {
	y = 'less';
}
//console.log(y);

switch(x) {
	case 18:
		y = "eighteen";
		break;
	case 19:
		y = "nineteen";
		break;
	default:
		y = "unknow";
}

console.log(y);
