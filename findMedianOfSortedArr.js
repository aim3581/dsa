/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 */

const getArrElement =(mid,nums1,nums2)=>{
	if(mid<nums1.length){
		return nums1[mid]
	}else {
		const num2Ind = mid-nums1.length;
		return nums2[num2Ind]
	}
}

const ifSorted=(nums1,nums2)=>{
	const l = nums1.length+nums2.length;
	if (l%2 ===0){
		const left =Math.floor((l-1)/2)
		const right =Math.ceil((l-1)/2)
		const lval =  getArrElement(left,nums1,nums2);
		const rVal = getArrElement(right,nums1,nums2);
		return (lval+rVal)/2
		
	}else{
		const mid = Math.floor((l-1)/2)
		return getArrElement(mid,nums1,nums2);
	}
}

const checkIsMidPresent = (nums1,nums2,l,i)=>{
	const l1 =nums1.length
	const l2 = nums2.length;
	if (l%2 ===0){
		const left =Math.floor((l-1)/2)
		const right =Math.ceil((l-1)/2)
		if(i<l2&&!(left<l1 &&nums1[left]<=nums2[i]&&right<l1 && nums1[right]<=nums2[i])){
			return "Concat";
		}
		const lval =  getArrElement(left,nums1,nums2);
		const rVal = getArrElement(right,nums1,nums2);
		return (lval+rVal)/2
		
	}else{
		const mid = Math.floor((l-1)/2)
		if(i<l2 && !(mid<l1&&nums1[mid]<=nums2[i] )){
			return "Concat";
		}
		return getArrElement(mid,nums1,nums2);
	}
}

const concatArr= (nums1,nums2,l,i)=>{
	const med = checkIsMidPresent(nums1,nums2,l,i);
	if(!isNaN(med)){
		return med;
	}

	
	const mid = Math.floor((nums1.length-1)/2)
	if(nums1[mid]>=nums2[i]){
		for (let j = mid; j >=0 ; j--) {
			if(nums1[j]<=nums2[i]){
			nums1.splice(j+1,0,nums2[i]);
			nums2.shift();
			break;
			}
			if(j==0){
				nums1.unshift(nums2[i]);
				nums2.shift();
			}
		}
	}
	const l1= nums1.length-1
	if(nums1[mid]<=nums2[i]){
		for (let j = mid; j <nums1.length ; j++) {
			if(nums1[j]>=nums2[i]){
				nums1.splice(j,0,nums2[i]);
				nums2.shift();
			break;
		}
		if(j==l1){
			nums1.push(nums2[i]);
			nums2.shift();
		}

		}
	}

	return concatArr(nums1,nums2,l,i)
}

var findMedianSortedArrays = function (nums1, nums2) {
	const l=nums1.length+nums2.length;
	const l1 = nums1.length-1;
	const l2 = nums2.length-1;
	if(nums1[l1] <nums2[0]){
		return ifSorted(nums1,nums2);
	}
	
	if(nums2[l2]<nums1[0]){
		return ifSorted(nums2,nums1);
	}

	if (nums2[0]<nums1[l1]) {
		return concatArr(nums1,nums2,l,0);
	}

	if (nums1[0]<nums2[l1]) {
		return concatArr(nums2,nums1,l,0);
	}
	return ifSorted(nums1,nums2)
};

const result = findMedianSortedArrays([2], [1,3,4]);
console.log(result)