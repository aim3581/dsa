package ds

import "fmt"

// Define a new type 'queue' as a slice of generic type T
type Queue[T any] []T

// Method to enqueue an element into the queue
func (q *Queue[T]) Enqueue(ele T) {
    *q = append(*q, ele) // Append the element to the end of the queue
}

// Method to dequeue an element from the queue
func (q *Queue[T]) Dequeue() (ele T) {
    if len(*q) == 0 {
        return // If the queue is empty, return zero value of type T
    }
    ele = (*q)[0] // Get the first element
    *q = (*q)[1:] // Remove the first element from the queue
    return ele
}
