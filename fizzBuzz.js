var argVal = Number(process.argv[2]);

var div3 = argVal % 3;
var div5 = argVal % 5;

if(div3 == 0 && div5 != 0)
	console.log('Java');
else if(div3 != 0 && div5 == 0)
	console.log('Script');
else if(div3 == 0 && div5 == 0)
	console.log('JavaScript');
else if(div3 != 0 && div5 != 0)
	console.log(argVal);
