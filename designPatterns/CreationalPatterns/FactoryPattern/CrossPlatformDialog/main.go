package main

import (
	"flag"
	"fmt"
)

// The client code works with an instance of a concrete
// creator, albeit through its base interface. As long as
// the client keeps working with the creator via the base
// interface, you can pass it any creator's subclass.
var mode *string

func main() {
	fmt.Println("main")
	app := CreateApplication(mode)
	if app == nil {
		fmt.Println("app not created")
	}
	app.start()
}

func init() {
	fmt.Println("init")
	mode = flag.String("mode", "Windows", "use -m <Web|Windos> to use respective dialog")
	flag.Parse()
	fmt.Println(*mode)
}
