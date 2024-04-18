package moderncoffetable

import "fmt"

type CoffeTable struct {
}

func (c *CoffeTable) HasLegs() {
	fmt.Println("moderncoffetable.HasLegs()")
}

func (c *CoffeTable) SitOn() {
	fmt.Println("moderncoffetable.SitOn()")
}

func CreateCoffeTable() *CoffeTable {
	return &CoffeTable{}
}
