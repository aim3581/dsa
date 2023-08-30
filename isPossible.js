/**
 * @param {number[]} target
 * @return {boolean}
 * Construct Target Array With Multiple Sums
 */
const isPossible = function (target) {
	const { allEle } = findMax(target);
	if (allEle) return console.log(false);
	console.log(check(target));
};
const findMax = (target) => {
	let max = 0;
	let sum = 0;
	let allEle = true;
	for (let i = 0; i < target.length; i++) {
		const element = target[i];
		max = target[max] < element ? i : max;
		sum += element;
		allEle = element === 1 && allEle ? true : false;
	}
	sum -= target[max];
	return { max, sum, allEle };
};

const check = (target) => {
	console.log(target);
	const { max, sum, allEle } = findMax(target);
	console.log({ max, sum, allEle });
	if (allEle) return true;
	if (target[max] - sum === 1) {
		target[max] = 1;
		return check(target);
	} else return false;
};

isPossible([9, 3, 5]);
