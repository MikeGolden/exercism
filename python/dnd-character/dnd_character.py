import heapq
import random

class Character:
    def __init__(self):
        # Initialize attributes with random ability scores
        self.strength = self.ability()
        self.dexterity = self.ability()
        self.constitution = self.ability()
        self.intelligence = self.ability()
        self.wisdom = self.ability()
        self.charisma = self.ability()
        
        # Calculate hitpoints based on constitution modifier
        self.hitpoints = 10 + modifier(self.constitution)

    def ability(self):
        # Generate an ability score by rolling four 6-sided dice and summing the top three values
        return sum(heapq.nlargest(3, random.choices(range(1, 7), k=4)))

def modifier(constitution):
    # Calculate the ability modifier based on the constitution score
    return (constitution - 10) // 2
