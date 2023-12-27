package lasagna

// PreparationTime estimates the total preparation time based on the number of layers and average time per layer.
func PreparationTime(layers []string, avgTimePerLayer int) int {
	if avgTimePerLayer == 0 {
		avgTimePerLayer = 2 // default average preparation time per layer
	}
	return len(layers) * avgTimePerLayer
}

// Quantities determines the quantity of noodles and sauce needed based on the layers provided.
func Quantities(layers []string) (noodles int, sauce float64) {
	for _, layer := range layers {
		switch layer {
		case "noodles":
			noodles += 50
		case "sauce":
			sauce += 0.2
		}
	}
	return noodles, sauce
}

// AddSecretIngredient replaces the last element in the recipe list with the last element from the friend's list.
func AddSecretIngredient(friendsList, myList []string) {
	if len(myList) > 0 && len(friendsList) > 0 {
		myList[len(myList)-1] = friendsList[len(friendsList)-1]
	}
}

// ScaleRecipe calculates the amounts needed for the desired number of portions.
func ScaleRecipe(quantities []float64, portions int) []float64 {
	scaledQuantities := make([]float64, len(quantities))
	for i, q := range quantities {
		scaledQuantities[i] = q * float64(portions) / 2.0
	}
	return scaledQuantities
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
