package artdecosofa

import "fmt"

type Sofa struct {
}

func (c *Sofa) HasLegs() {
	fmt.Println("artdecosofa.HasLegs()")
}

func (c *Sofa) SitOn() {
	fmt.Println("artdecosofa.SitOn()")
}

func CreateSofa() *Sofa {
	return &Sofa{}
}
