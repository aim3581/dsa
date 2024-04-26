package tree

/**
Exercise: Equivalent Binary Trees
1. Implement the Walk function.

2. Test the Walk function.

The function tree.New(k) constructs a randomly-structured (but always sorted) binary tree holding the values k, 2k, 3k, ..., 10k.

Create a new channel ch and kick off the walker:

go Walk(tree.New(1), ch)
Then read and print 10 values from the channel. It should be the numbers 1, 2, 3, ..., 10.

3. Implement the Same function using Walk to determine whether t1 and t2 store the same values.

4. Test the Same function.

Same(tree.New(1), tree.New(1)) should return true, and Same(tree.New(1), tree.New(2)) should return false.
*/

import (
	"github.com/aim3581/dsa/ds"
)

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func WalkInorderStack(t *Tree, ch chan int) {
	stk := ds.Stack[*Tree]{}
	current := t
	for current != nil || len(stk) > 0 {
		for current != nil {
			stk.Push(current)
			current = current.Left
		}
		current = stk.Pop()
		ch <- current.Value
		current = current.Right
	}
	close(ch)
}

func Walk(t *Tree, ch chan int) {
	if t == nil {
		return
	}
	Walk(t.Left, ch)
	ch <- t.Value
	Walk(t.Right, ch)
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *Tree) bool {
	ch1 := make(chan int)
	ch2 := make(chan int)
	go func() {
		Walk(t1, ch1)
		defer close(ch1)
	}()
	go func() {
		Walk(t2, ch2)
		defer close(ch2)
	}()

	for {

		a, ok := <-ch1
		if !ok {
			return true
		}
		b, ok := <-ch2
		if !ok {
			return true
		}
		if a != b {
			return false
		}
	}

	return true
}
