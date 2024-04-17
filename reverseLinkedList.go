package main

import "testing"
import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func (l *ListNode) NewList(arr []int){
	for i:= 0; i< len(arr);i++{
		l.Val = arr[i]
		if(i<len(arr)-1){
			l.Next = &ListNode{}
			l= l.Next
		}
	}
}

func(l *ListNode) String() string{
	var str string
	for l != nil{
		str += fmt.Sprintf(" %v ", l.Val)
		l= l.Next
	}
	return str
}

func reverseBetween(head *ListNode, left int, right int) *ListNode {
	if left == right {
		return head
	}
	var trav *ListNode
	var last *ListNode
	var prev *ListNode
	trav = head
	prev = head
	for i := 1; i <= right; i++ {
		if i < left {
			prev = trav
		} else if i == right {
			last = trav
		}
		trav = trav.Next
	}
	var leftIsFirstNode bool
	if left > 1 {
		trav = prev.Next
	} else {
		leftIsFirstNode = true
		trav = head
	}
	for i := left; i < right; i++ {
		tmp := trav.Next
		trav.Next = last.Next
		last.Next = trav
		if !leftIsFirstNode {
			prev.Next = tmp
		}
		trav = tmp
	}
	if leftIsFirstNode {
		return last
	}
	return head
}

func main(){
	head:= &ListNode{}
	head.NewList([]int{1,2,3,4,5,6})
	 fmt.Println(head)
	 head = reverseBetween(head,2,4)
	 fmt.Println(head)
}

type TestCase struct{
	input []any
	expect any
}

type TestCases struct{
	cases []TestCase
}

func TestReverseBetween(t *testing.T) {
   

}