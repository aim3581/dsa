package main

import (
	factory "abstract.factory/Factory"
)

func main() {
	c := factory.CreateChair("victorian")
	c.HasLegs()
	c.SitOn()
}
