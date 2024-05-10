package graph

import "fmt"

type Node struct{
	Value int
	Edges []*Node
}

func (n *Node) AddEdge(e *Node){
	n.Edges = append(n.Edges, e)
}

func (n *Node) BFS(){
	visited := make(map[*Node]bool)
	q := []*Node{n}
	for len(q) > 0 {
		t := q[0]
		q = q[1:]
		visited[t] = true
		fmt.Println(t.Value)
		for _, v := range t.Edges {
			if _,ok := visited[v]; !ok {
				q = append(q, v)
			}
		}
	}
}

func TestData(){
	n := &Node{Value:1}
	n.BFS()
}