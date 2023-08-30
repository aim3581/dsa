function addToArray(arr, index, value) {
	// perf: array.push is faster than array.splice!
	if (index >= arr.length) {
		arr.push(value);
	} else {
		arr.splice(index, 0, value);
	}
}
function removeFromArray(arr, index) {
	// perf: array.pop is faster than array.splice!
	if (index >= arr.length - 1) {
		return arr.pop();
	} else {
		return arr.splice(index, 1)[0];
	}
}
