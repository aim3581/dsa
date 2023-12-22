package main

import "fmt"

type Dialog interface {
	render()
	createButton() Button
}

type AbstractDialog struct {
	Dialog
}

func (a *AbstractDialog) render() {
	fmt.Println("abstractDialog render called")
}

type WebDialog struct {
	*AbstractDialog
}

func (a *WebDialog) createButton() Button {
	return new(WebButton)
}

type WindowDialog struct {
	*AbstractDialog
}

func (a *WindowDialog) render() {
	fmt.Println("WindowDialog render called")
}

func (a *WindowDialog) createButton() Button {
	return new(WindowsButton)
}
