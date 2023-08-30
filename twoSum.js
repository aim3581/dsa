/* @param {number} target
 * @return {number[]}
 * i/p can have duplicate values, we should use combination once
 * find out all combinations
 * return number of possible combinations.
 */
const twoSum = function (nums, target) {
	// used will contains combination ele1,ele2
	const n = nums.length;
	const used = {};
	used["pairs"] = {};
	used[nums[0]] = 0;
	for (let i = 1; i < n; i++) {
		checkSum(nums, i, target, used);
	}
	console.log(used);
	console.log(
		"Number of possible combinations : " + Object.keys(used.pairs).length
	);
};

const checkSum = (nums, i, target, used) => {
	const combination = target - nums[i];
	if (isUsed(used, combination)) {
		used.pairs[nums[i]] = combination;
	} else {
		used[nums[i]] = i;
	}
};

const isUsed = (used, combination) => {
	return used.hasOwnProperty(combination);
};

twoSum([3, 3, 3, 4, 2], 6);
