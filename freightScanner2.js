function scan(arr){
	var newArr = [];
	for(var i = 0;i<arr.length;i++){
		if(arr[i] == 'contraband')
			newArr.push(i);
	}
	return newArr;
}
