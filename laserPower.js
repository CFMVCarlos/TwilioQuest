function calculatePower(arr){
	var total = 0;
	arr.forEach((n,i) => arr[i]=n*2)
	arr.forEach(n => total+=n)
	return total;
}

calculatePower([1,2,3])
