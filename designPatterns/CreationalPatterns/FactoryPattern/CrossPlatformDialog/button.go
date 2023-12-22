package main

import "fmt"

type Button interface {
	render()
	onClick()
}

type WindowsButton struct {
}

// Render a button in Windows style.
func (b *WindowsButton) render() {
	fmt.Println("WindowsButton rendered")
}

// Bind a native OS click event.
func (b *WindowsButton) onClick() {
	fmt.Println("WindowsButton clicked")
}

type WebButton struct {
}

// Return an HTML representation of a button.
func (b *WebButton) render() {
	fmt.Println("WebButton rendered")
}

// Bind a web browser click event.
func (b *WebButton) onClick() {
	fmt.Println("WebButton clicked")
}
