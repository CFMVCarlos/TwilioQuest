class Ducktypium{
	constructor(str){
		if(str != 'red' && str != 'blue' && str != 'yellow')
			throw new Error('error?');	
		else
			this.color = str;
			this.calibrationSequence = [];
	}

	refract(str){
		if(str != 'red' && str != 'blue' && str != 'yellow')
			throw new Error('error?');
		else{
			if(this.color == str)
				return this.color;
			else if(this.color == 'red'){
				if(str == 'blue')
					return 'purple';
				else
					return 'orange';
			}
			else if(this.color == 'blue'){
				if(str == 'red')
					return 'purple';
				else
					return 'green';
			}
			else{
				if(str == 'red')
					return 'orange';
				else
					return 'green';
			}
		}
	}

	calibrate(arr){
		var newArr = arr.sort();
		newArr.forEach((v,i) => newArr[i] = 3*v)
		this.calibrationSequence = newArr;
	}
}

// The following would produce an error
try {
  const badColor = new Ducktypium('pink');
} catch(e) {
  console.log('Color must be red, yellow, or blue!');
}

// Create a new instance of the class
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
