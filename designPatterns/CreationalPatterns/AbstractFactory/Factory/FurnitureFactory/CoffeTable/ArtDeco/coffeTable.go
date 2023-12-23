package artdecocoffetable

import "fmt"

type CoffeTable struct {
}

func (c *CoffeTable) HasLegs() {
	fmt.Println("artdecocoffetable.HasLegs()")
}

func (c *CoffeTable) SitOn() {
	fmt.Println("artdecocoffetable.SitOn()")
}

func CreateCoffeTable() *CoffeTable {
	return &CoffeTable{}
}
