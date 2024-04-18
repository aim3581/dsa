package factory

import (
	"strings"

	chair "abstract.factory/services/Factory/FurnitureFactory/Chair"
	artdecochair "abstract.factory/services/Factory/FurnitureFactory/Chair/ArtDeco"
	modernchair "abstract.factory/services/Factory/FurnitureFactory/Chair/Modern"
	victorianchair "abstract.factory/services/Factory/FurnitureFactory/Chair/Victorian"
	coffetable "abstract.factory/services/Factory/FurnitureFactory/CoffeTable"
	artdecocoffetable "abstract.factory/services/Factory/FurnitureFactory/CoffeTable/ArtDeco"
	moderncoffetable "abstract.factory/services/Factory/FurnitureFactory/CoffeTable/Modern"
	victoriancoffetable "abstract.factory/services/Factory/FurnitureFactory/CoffeTable/Victorian"
	sofa "abstract.factory/services/Factory/FurnitureFactory/Sofa"
	artdecosofa "abstract.factory/services/Factory/FurnitureFactory/Sofa/ArtDeco"
	modernsofa "abstract.factory/services/Factory/FurnitureFactory/Sofa/Modern"
	victoriansofa "abstract.factory/services/Factory/FurnitureFactory/Sofa/Victorian"
)

func CreateChair(variant string) chair.IChair {
	switch strings.ToLower(variant) {
	case "modern":
		return modernchair.CreateChair()
	case "artdeco":
		return artdecochair.CreateChair()
	case "victorian":
		return victorianchair.CreateChair()
	}
	return nil
}

func CreateCoffeTable(variant string) coffetable.ICoffeTable {
	switch strings.ToLower(variant) {
	case "modern":
		return moderncoffetable.CreateCoffeTable()
	case "artdeco":
		return artdecocoffetable.CreateCoffeTable()
	case "victorian":
		victoriancoffetable.CreateCoffeTable()
	}
	return nil
}

func CreateSofa(variant string) sofa.ISofa {
	switch strings.ToLower(variant) {
	case "modern":
		return modernsofa.CreateSofa()
	case "artdeco":
		return artdecosofa.CreateSofa()
	case "victorian":
		return victoriansofa.CreateSofa()
	}
	return nil
}
