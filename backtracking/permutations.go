package backtracking

// permute generates all permutations of the input slice nums.
func Permute(nums []int) [][]int {
	// Initialize the result slice.
	result := [][]int{}
	// Start the backtracking recursively.
	// bt(0, nums, &result)
	// Start the backtracing using stack
	btStack(nums, &result)
	// Return the generated permutations.
	return result
}

// bt is a helper function for permute that performs the backtracking.
func bt(start int, nums []int, result *[][]int) {
	// Get the length of the nums slice.
	n := len(nums)
	// If we have processed all numbers, add the permutation to the result.
	if start == n {
		// Make a copy of nums and add it to the result.
		temp := make([]int, len(nums))
		copy(temp, nums)
		*result = append(*result, temp)
		return
	}
	// For each number in the nums slice...
	for i := start; i < n; i++ {
		// Swap the current number with the start number.
		nums[i], nums[start] = nums[start], nums[i]
		// Recurse with the next number.
		bt(start+1, nums, result)
		// Swap the numbers back to restore the original slice.
		nums[i], nums[start] = nums[start], nums[i]
	}
}

// StackItem is a struct that holds an index and a slice of integers.
type StackItem struct {
	Index int
	Nums  []int
}

// swap is a helper function that swaps two elements in a slice.
func swap(nums []int, i, j int) {
	nums[i], nums[j] = nums[j], nums[i]
}

func btStack(nums []int, result *[][]int) {
	// Initialize the stack with a StackItem that has the input slice and an index of 0.
	stack := []StackItem{{0, append([]int(nil), nums...)}}

	// Continue until the stack is empty.
	for len(stack) > 0 {
		// Pop a StackItem from the stack.
		item := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		// If the index in the StackItem is equal to the length of nums minus 1...
		if item.Index == len(nums)-1 {
			// Add the slice in the StackItem to the result.
			*result = append(*result, append([]int(nil), item.Nums...))
		}

		// For each number in the slice from the index onwards...
		for i := item.Index; i < len(nums); i++ {
			// Swap the number at the index with the number at i.
			swap(item.Nums, item.Index, i)
			// Push a new StackItem with the swapped slice and the incremented index onto the stack.
			stack = append(stack, StackItem{item.Index + 1, append([]int(nil), item.Nums...)})
			// Swap the numbers back to backtrack.
			swap(item.Nums, item.Index, i)
		}
	}

}
