function calculateMass(arr){
	return arr.reduce((total,val) => total+val.length,0);
}
