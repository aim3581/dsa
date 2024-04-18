package modernchair

import "fmt"

type Chair struct {
}

func (c *Chair) HasLegs() {
	fmt.Println("modernchair.HasLegs")

}

func (c *Chair) SitOn() {
	fmt.Println("modernchair.SitOn")
}

func CreateChair() *Chair {
	return &Chair{}
}
