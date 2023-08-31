/**
 * Given an array containing positive and negative numbers, find all the sub arrays in it, whose sum is equal to zero.
 */

function findSubArrayWhichHasZeroSum(arr) {
	const subArr = [];
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let sum = 0;
		const v1 = arr[i];
		sum += v1;
		for (let j = i + 1; j < arr.length; j++) {
			count++;
			const v2 = arr[j];
			sum += v2;
			if (sum === 0) {
				subArr.push([i, j]);
				break;
			}
		}
	}

	return subArr;
}

function findSubArrayusingMap(arr) {
	const subArr = [];
	const map = new Map();
	let sum = 0;
	let li = 0;
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		sum += value;
		if (value === 0 && sum === 0) {
			subArr.push([0, 0]);
			continue;
		}
		if (sum === 0) {
			subArr.push([li, i]);
			li = i + 1;
			continue;
		}
		if (map.get(sum)) {
			let l = map.get(sum) + 1;
			subArr.push([l, i]);
		}
		map.set(sum, i);
	}

	return subArr;
}

const arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];

const subArr = findSubArrayusingMap(arr);
console.log(subArr);
