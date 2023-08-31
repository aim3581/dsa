/**
 * Write a function to find if a given integer x appears more
than n/2 times in a sorted array of n integers.
We need to write a function that takes an array (arr[)),
array's size (n) and a number to be searched (x) as
parameters and returns true if x is a majority element
(present more than n/2 times). Print "True" or "False""
Example:
Input: [1, 2, 3, 3, 3,3, 101,x=3
Output: True (x appears more than n/2 times in the given
array)
Input: [1, 1, 2,4,4,4,6,61,x =4
Output: False (x doesn't appear more than n/2 times in
the given array)
Input: [1, 1, 1,2,2]x=1
Output: True (x appears more than n/2 times in the given
array)
Could you do this faster than 0(n)?
 */

function findInteger(nums, x) {
	const n = Math.floor(nums.length / 2) + 1;
	let start = -1;
	let count = 0;
	for (let i = n; i >= 0; i--) {
		if (nums[i] == x) {
			start = i;
		}
	}

	for (let i = start; i < nums.length; i++) {
		if (x === nums[i]) {
			count++;
			continue;
		}
		break;
	}
	return count > nums.length / 2;
}

const nums = [1, 2, 3, 3, 3, 3, 10];
const nums2 = [1, 1, 2, 4, 4, 4, 6, 6];
const nums3 = [1, 1, 1, 2, 2];

console.log("nums: ", findInteger(nums, 3));

console.log("nums2: ", findInteger(nums2, 4));

console.log("nums3: ", findInteger(nums3, 1));
