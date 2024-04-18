package main

import factory "abstract.factory/services/Factory"

func main() {
	c := factory.CreateChair("modern")
	c.HasLegs()
	c.SitOn()
}
