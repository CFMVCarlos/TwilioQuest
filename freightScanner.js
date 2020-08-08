function scan(arr){
	var counter = 0;
	for(var i = 0;i<arr.length;i++){
		if(arr[i] == 'contraband')
			counter++
	}
	return counter;
}
