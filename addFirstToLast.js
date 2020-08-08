function addFirstToLast(arr){
	if(arr.length)
		return arr[0] + arr[arr.length-1]
	else
		return ''
}
console.log(addFirstToLast(['a']))
