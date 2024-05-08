package backtracking

func Subsets(nums []int) [][]int {
	list := [][]int{}
	subsetHelper(0, nums, []int{}, &list)
	return list
}

func subsetHelper(start int, nums []int, arr []int, result *[][]int) {
	// Add the current subset to the result
	*result = append(*result, append([]int(nil), arr...))
	// Iterate over the elements in the input set starting from the start index
	for i := start; i < len(nums); i++ {
		// Add the current element to the current subset
		arr = append(arr, nums[i])
		// Recursively call the backtracking function with the next index and the updated current subset
		subsetHelper(i+1, nums, arr, result)
		// Remove the last element from the current subset to backtrack
		arr = arr[:len(arr)-1]
	}
}
