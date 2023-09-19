class HighScores:
    def __init__(self, scores):
        # Initialize the HighScores object with a list of scores
        self.scores = scores
        # Store the latest score, which is the last score in the list
        self.latest_res = scores[-1]

        # Check if there are more than 3 scores
        if len(scores) > 3:
            personal_top_three_res = []
            aux = scores.copy()
            # Find the top three scores and remove them from the auxiliary list
            for i in range(3):
                personal_top_three_res.append(max(aux))
                aux.remove(max(aux))
        else:
            # If there are 3 or fewer scores, sort them in descending order
            personal_top_three_res = sorted(scores)[::-1]

        # Store the personal top three scores
        self.personal_top_three_res = personal_top_three_res
        # Sort the scores from lowest to highest
        self.highest_to_lowest_res = sorted(scores)
        # Store the personal best score, which is the maximum score in the list
        self.personal_best_res = max(scores)

    def latest(self):
        # Return the latest score
        return self.latest_res

    def personal_top_three(self):
        # Return the personal top three scores
        return self.personal_top_three_res

    def highest_to_lowest(self):
        # Return the scores in descending order
        return self.highest_to_lowest_res

    def personal_best(self):
        # Return the personal best score
        return self.personal_best_res
