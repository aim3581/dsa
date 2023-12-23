package victorianchair

import "fmt"

type Chair struct {
}

func (c *Chair) HasLegs() {
	fmt.Println("victorianchair.HasLegs")
}

func (c *Chair) SitOn() {
	fmt.Println("victorianchair.SitOn")
}

func CreateChair() *Chair {
	return &Chair{}
}
