package main

import (
	"fmt"

	"github.com/aim3581/dsa/tree"
)

func main() {
	// head := &linkedList.ListNode{}
	// head.NewList([]int{1, 2, 3, 4, 5, 6})
	// fmt.Println(head)
	// head = linkedList.ReverseBetween(head, 2, 4)
	// fmt.Println(head)
	t1 := tree.New(50)
	t2 := tree.New(50)
	fmt.Println(tree.Same(t1, t2))
}
