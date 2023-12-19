package lasagna

import (
	"fmt"
)

const OvenTime = 40

// RemainingOvenTime returns the remaining minutes based on the `actual` minutes already in the oven.
func RemainingOvenTime(actualMinutesInOven int) int {
	return OvenTime - actualMinutesInOven
}

// PreparationTime calculates the time needed to prepare the lasagna based on the amount of layers.
func PreparationTime(numberOfLayers int) int {
	return numberOfLayers * 2
}

// ElapsedTime calculates the time elapsed cooking the lasagna. This time includes the preparation time and the time the lasagna is baking in the oven.
func ElapsedTime(numberOfLayers, actualMinutesInOven int) int {
	prepTime := PreparationTime(numberOfLayers)
	return prepTime + actualMinutesInOven
}

func main() {
	fmt.Println("OvenTime:", OvenTime)

	remainingTime := RemainingOvenTime(30)
	fmt.Println("Remaining Oven Time:", remainingTime)

	prepTime := PreparationTime(2)
	fmt.Println("PreparationTime:", prepTime)

	elapsedTime := ElapsedTime(3, 20)
	fmt.Println("ElapsedTime:", elapsedTime)
}
