package stack

type Stack[T any] []T

func New[T any]() Stack[T] {
	return []T{}
}

func (stack Stack[T]) Push(ele T) {
	stack = append(stack, ele)
}

func (stack Stack[T]) Pop() T {
	ele := stack[len(stack)-1]
	stack = append(stack[:len(stack)-1], stack[len(stack):]...)
	return ele
}

func (stack Stack[T]) Has(ele T) bool {
	return false
}
