package linkedList

import "testing"

func ReverseBetween(head *ListNode, left int, right int) *ListNode {
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

type TestCase struct {
	input  []any
	expect any
}

type TestCases struct {
	cases []TestCase
}

func TestReverseBetween(t *testing.T) {

}
