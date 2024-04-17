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
	t1 := tree.New(10)
	t2 := tree.New(5)
	fmt.Println(t1)
	fmt.Println(t2)
	fmt.Println(tree.Same(t1, t2))
}
