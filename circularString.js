/**
 * Check if an array of string is a circular in nature i.e., if the first character of first string of the array is same with the last character of the last string of the array , if the first character of second string of the array is same with the last character of the first string of the array , if the first character of third string of the array is same with the second character of the last string of the array and so on.
 */

function isCircularStr(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	for (let i = 0, j = str2.length - 1; i <= j; i++, j--) {
		if (str1[i] !== str2[j]) {
			return false;
		}
	}
	return true;
}

function isCircularArr(arr) {
	if (arr.length < 1) return false;
	for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
		if (!isCircularStr(arr[i], arr[j])) {
			return false;
		}
	}
	return true;
}

const arr = ["abc", "cza", "azc", "cba"];
const result = isCircular(arr);
console.log(result);
