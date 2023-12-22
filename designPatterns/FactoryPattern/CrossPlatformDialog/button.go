package main

import "fmt"

type Button interface {
	render()
	onClick()
}

type WindowsButton struct {
}

func (b *WindowsButton) render() {
	fmt.Println("WindowsButton rendered")
}

func (b *WindowsButton) onClick() {
	fmt.Println("WindowsButton clicked")
}

type WebButton struct {
}

func (b *WebButton) render() {
	fmt.Println("WebButton rendered")
}

func (b *WebButton) onClick() {
	fmt.Println("WebButton clicked")
}
