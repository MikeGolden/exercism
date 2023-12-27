package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten", "jack", "queen", "king":
		return 10
	default:
		return 0 // or any value you wish to denote an invalid card
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	value1 := ParseCard(card1)
	value2 := ParseCard(card2)
	dealerValue := ParseCard(dealerCard)

	total := value1 + value2

	// Decisioin Logic
	if total == 21 {
		return "P" // Blackjack!
	} else if value1 == 11 && value2 == 11 {
		return "P" // Two aces, always split
	} else if total >= 17 {
		return "S" // Stand
	} else if total >= 13 && total <= 16 && dealerValue <= 6 {
		return "S" // Stand
	} else {
		return "H" // Hit
	}
}
