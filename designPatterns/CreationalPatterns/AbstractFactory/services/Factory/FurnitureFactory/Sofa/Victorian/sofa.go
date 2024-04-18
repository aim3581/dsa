package victoriansofa

import "fmt"

type Sofa struct {
}

func (c *Sofa) HasLegs() {
	fmt.Println("victoriansofa.HasLegs()")
}

func (c *Sofa) SitOn() {
	fmt.Println("victoriansofa.SitOn()")
}

func CreateSofa() *Sofa {
	return &Sofa{}
}
