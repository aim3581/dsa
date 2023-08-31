/**
 *  Given an array containing integers, in which the elements are repeated multiple times. 
Now sort the array wrt the frequency of numbers. 

eg:    i/p: 2, 4, 5, 2, 1, 9, 3, 2, 2, 5, 1, 5
    o/p: 2, 2, 2, 2, 5, 5, 5, 1, 1, 4, 3, 9
 */

function findMaxFreq(map) {
	let obj = { value: 0, freq: 0 };

	for (const key of map.keys()) {
		const freq = map.get(key);
		if (obj.freq < freq) {
			obj.value = key;
			obj.freq = freq;
		}
	}
	return obj;
}

function sortArrayByFrequency(arr) {
	const map = new Map();

	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		if (map.get(value)) {
			map.set(value, map.get(value) + 1);
		} else {
			map.set(value, 1);
		}
	}
	const op = [];
	while (map.size > 0) {
		const { value, freq } = findMaxFreq(map);
		for (let i = 0; i < freq; i++) {
			op.push(value);
		}
		map.delete(value);
	}
	console.log(op);
	return op;
}

const arr = [2, 4, 5, 2, 1, 9, 3, 2, 2, 5, 1, 5];

sortArrayByFrequency(arr);
