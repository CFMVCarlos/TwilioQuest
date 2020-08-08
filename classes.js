class Materializer{
	constructor(target){
		this.target = target;
		this.activated = false;
		console.log(this.target,this.activated)
	}

	activate(){
		this.activated = true;
		console.log(this.activated)
	}

	materialize(){
		if(this.activated)
			return this.target;
	}
}

var x = new Materializer('john');
console.log(x.materialize());
x.activate();
console.log(x.materialize());
