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

const arr = [6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7];

const subArr = findSubArrayWhichHasZeroSum(arr);
console.log(subArr);
