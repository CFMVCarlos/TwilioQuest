function getFirstAmountSorted(arr, index){
	var newArr = arr.sort()
	console.log(newArr,newArr.slice(0,index)
)
	return newArr.slice(0,index)
}

getFirstAmountSorted(['a','b','c'],1);
