// Package weather represents weather forecast.
package weather

// CurrentCondition is one variable.
var CurrentCondition string

// CurrentLocation variable.
var CurrentLocation string

// Forecast function is a weather forecast function.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
