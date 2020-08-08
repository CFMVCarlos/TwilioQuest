var argVal = Number(process.argv[2]);

if(argVal == 0)
	console.log('alive');
else if(argVal == 1)
	console.log('flowering');
else if(argVal == 2)
	console.log('shedding');
else
	console.log('other');
