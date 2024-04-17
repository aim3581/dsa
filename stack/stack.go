package stack

func Push[K any](stack []K, ele K) {
	stack = append(stack, ele)
}

func Pop[K any](stack []K) K {
	ele := stack[len(stack)-1]
	stack = append(stack[:len(stack)-1], stack[len(stack):]...)
	return ele
}
