package cars

import "math"

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	successfulCarsPerHour := float64(productionRate) * (successRate / 100.0)
	return successfulCarsPerHour
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	successfulCarsPerHour := CalculateWorkingCarsPerHour(productionRate, successRate)
	successfulCarsPerMinute := int(math.Round(successfulCarsPerHour / 60.0))
	return successfulCarsPerMinute
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	groupsOfTen := carsCount / 10
	individualCars := carsCount % 10

	totalCost := uint(groupsOfTen*95000 + individualCars*10000)
	return totalCost
}
