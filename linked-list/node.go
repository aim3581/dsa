package linkedList

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func (l *ListNode) NewList(arr []int) {
	for i := 0; i < len(arr); i++ {
		l.Val = arr[i]
		if i < len(arr)-1 {
			l.Next = &ListNode{}
			l = l.Next
		}
	}
}

func (l *ListNode) String() string {
	var str string
	for l != nil {
		str += fmt.Sprintf(" %v ", l.Val)
		l = l.Next
	}
	return str
}
