package main

import (
	"fmt"

	mstring "github.com/aim3581/dsa/mString"
)

func main() {
	// head := &linkedList.ListNode{}
	// head.NewList([]int{1, 2, 3, 4, 5, 6})
	// fmt.Println(head)
	// head = linkedList.ReverseBetween(head, 2, 4)
	// fmt.Println(head)
	// t1 := tree.New(10)
	// t2 := tree.New(5)
	// fmt.Println(t1)
	// fmt.Println(t2)
	// fmt.Println(tree.Same(t1, t2))
	strs := []string{"bpfbhmipx", "bbbbbbbb", "abcabccb", "pwwkew"}
	expecteds := []int{7, 1, 3, 3}
	for i := 0; i < len(strs); i++ {
		str := strs[i]
		n := mstring.UsingMap(str)
		fmt.Println(str, n, n == expecteds[i])
	}

}
