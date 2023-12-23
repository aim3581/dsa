package artdecochair

import "fmt"

type Chair struct {
}

func (c *Chair) HasLegs() {
	fmt.Println("artdecochair.HasLegs")

}

func (c *Chair) SitOn() {
	fmt.Println(".artdecochairSitOn")
}

func CreateChair() *Chair {
	c := &Chair{}
	return c
}
