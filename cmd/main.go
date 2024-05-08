package main

import (
	"fmt"
	"reflect"

	"github.com/aim3581/dsa/backtracking"
	linkedList "github.com/aim3581/dsa/linked-list"
	mstring "github.com/aim3581/dsa/mString"
	"github.com/aim3581/dsa/slidingwindow"
	"github.com/aim3581/dsa/tree"
)

func main() {
	//testReverLinkedList()
	// testLongestSubString()
	// testFindSubString()
	//testEquivalentTree()
	// testPermutations()
	testSubsets()
}

func testEquivalentTree() {
	t1 := tree.New(5)
	t2 := tree.New(5)
	fmt.Println(t1)
	fmt.Println(t2)
	fmt.Println(tree.Same(t1, t2))
}
func testReverLinkedList() {
	head := &linkedList.ListNode{}
	head.NewList([]int{1, 2, 3, 4, 5, 6})
	fmt.Println(head)
	head = linkedList.ReverseBetween(head, 2, 4)
	fmt.Println(head)

}

func testLongestSubString() {
	strs := []string{"bpfbhmipx", "bbbbbbbb", "abcabccb", "pwwkew"}
	expecteds := []int{7, 1, 3, 3}
	for i := 0; i < len(strs); i++ {
		str := strs[i]
		n := mstring.UsingMap(str)
		fmt.Println(str, n, n == expecteds[i])
	}
}

func testFindSubString() {
	strs := []string{
		"barfoothefoobarman",
		"wordgoodgoodgoodbestword",
		"barfoofoobarthefoobarman",
		"lingmindraboofooowingdingbarrwingmonkeypoundcake",
		"wordgoodgoodgoodbestword",
		"aaaaaaaaaaaaaa",
	}
	arr := [][]string{
		[]string{"foo", "bar"},
		[]string{"word", "good", "best", "word"},
		[]string{"bar", "foo", "the"},
		[]string{"fooo", "barr", "wing", "ding", "wing"},
		[]string{"word", "good", "best", "good"},
		[]string{"aa", "aa"},
	}
	expecteds := [][]int{
		[]int{0, 9},
		[]int{},
		[]int{6, 9, 12},
		[]int{13},
		[]int{8},
		[]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
	}
	for i := 0; i < len(strs); i++ {
		str := strs[i]
		res := slidingwindow.FindSubstring(str, arr[i])
		if reflect.DeepEqual(res, expecteds[i]) {
			fmt.Println("Passed")
		} else {
			fmt.Println("Failed. expected: ", expecteds[i], " Got: ", res)
		}
	}

}

func testPermutations() {
	// Define the input slice.
	nums := []int{1, 2, 3}
	// Generate and print the permutations of the input slice.
	result := backtracking.Permute(nums)
	fmt.Println(result)
}

func testSubsets(){
	nums := []int{1,2,3}
	fmt.Println(backtracking.Subsets(nums))
}