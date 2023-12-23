package factory

import (
	chair "abstract.factory/Factory/FurnitureFactory/Chair"
	artdecochair "abstract.factory/Factory/FurnitureFactory/Chair/ArtDeco"
	modernchair "abstract.factory/Factory/FurnitureFactory/Chair/Modern"
	victorianchair "abstract.factory/Factory/FurnitureFactory/Chair/Victorian"
	coffetable "abstract.factory/Factory/FurnitureFactory/CoffeTable"
	artdecocoffetable "abstract.factory/Factory/FurnitureFactory/CoffeTable/ArtDeco"
	moderncoffetable "abstract.factory/Factory/FurnitureFactory/CoffeTable/Modern"
	victoriancoffetable "abstract.factory/Factory/FurnitureFactory/CoffeTable/Victorian"
	sofa "abstract.factory/Factory/FurnitureFactory/Sofa"
	artdecosofa "abstract.factory/Factory/FurnitureFactory/Sofa/ArtDeco"
	modernsofa "abstract.factory/Factory/FurnitureFactory/Sofa/Modern"
	victoriansofa "abstract.factory/Factory/FurnitureFactory/Sofa/Victorian"
)

func CreateChair(variant string) chair.IChair {
	switch variant {
	case "modern":
		return modernchair.CreateChair()
	case "artDeco":
		return artdecochair.CreateChair()
	case "victorian":
		return victorianchair.CreateChair()
	}
	return nil
}

func CreateCoffeTable(variant string) coffetable.ICoffeTable {
	switch variant {
	case "modern":
		return moderncoffetable.CreateCoffeTable()
	case "artDeco":
		return artdecocoffetable.CreateCoffeTable()
	case "victorian":
		victoriancoffetable.CreateCoffeTable()
	}
	return nil
}

func CreateSofa(variant string) sofa.ISofa {
	switch variant {
	case "modern":
		return modernsofa.CreateSofa()
	case "artDeco":
		return artdecosofa.CreateSofa()
	case "victorian":
		return victoriansofa.CreateSofa()
	}
	return nil
}
