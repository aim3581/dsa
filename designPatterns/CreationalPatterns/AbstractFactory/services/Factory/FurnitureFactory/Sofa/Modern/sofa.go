package modernsofa

import "fmt"

type Sofa struct {
}

func (c *Sofa) HasLegs() {
	fmt.Println("modernsofa.HasLegs()")
}

func (c *Sofa) SitOn() {
	fmt.Println("modernsofa.SitOn()")
}

func CreateSofa() *Sofa {
	return &Sofa{}
}
