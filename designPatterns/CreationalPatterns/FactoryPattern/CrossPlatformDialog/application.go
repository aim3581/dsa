package main

type Application struct {
	dialog Dialog
}

// The application picks a creator's type depending on the
// current configuration or environment settings.

func CreateApplication(mode *string) *Application {
	app := new(Application)
	switch *mode {
	case "Windows":
		app.dialog = new(WindowDialog)
	case "Web":
		app.dialog = new(WebDialog)
	}
	return app
}

func (app *Application) start() {
	app.dialog.render()
	btn := app.dialog.createButton()
	btn.render()
	btn.onClick()
}
