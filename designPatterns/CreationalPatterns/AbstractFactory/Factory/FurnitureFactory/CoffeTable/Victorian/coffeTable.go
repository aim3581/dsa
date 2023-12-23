package victoriancoffetable

import "fmt"

type CoffeTable struct {
}

func (c *CoffeTable) HasLegs() {
	fmt.Println("victoriancoffetable.HasLegs()")
}

func (c *CoffeTable) SitOn() {
	fmt.Println("victoriancoffetable.SitOn()")
}

func CreateCoffeTable() *CoffeTable {
	return &CoffeTable{}
}
