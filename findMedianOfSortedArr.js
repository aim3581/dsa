/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const arr = [...nums1, ...nums2];
	const l = arr.length;
	const middle = (l - 1) / 2;
	console.log("Median is : ", arr[middle]);
};

findMedianSortedArrays([1, 3], [2]);
