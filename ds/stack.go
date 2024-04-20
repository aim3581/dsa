package ds

import "fmt"

// Define a new type 'stack' as a slice of generic type T
type Stack[T any] []T

// Method to push an element onto the stack
func (stk *Stack[T]) Push(ele T) {
    *stk = append(*stk, ele) // Append the element to the end of the stack
}

// Method to pop an element from the stack
func (stk *Stack[T]) Pop() (ele T) {
    if len(*stk) == 0 {
        return // If the stack is empty, return zero value of type T
    }
    ind := len(*stk) - 1 // Get the index of the last element
    ele = (*stk)[ind] // Get the last element
    *stk = (*stk)[:ind] // Remove the last element from the stack
    return ele
}

