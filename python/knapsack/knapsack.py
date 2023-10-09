def maximum_value(maximum_weight, items):
    # Create a 2D list to store the maximum values for different combinations
    # of items and weights. Initialize it with zeros.
    dp = [[0 for _ in range(maximum_weight + 1)] for _ in range(len(items) + 1)]

    for i in range(1, len(items) + 1):
        item_weight = items[i - 1]["weight"]
        item_value = items[i - 1]["value"]

        for w in range(1, maximum_weight + 1):
            # If the current item's weight is greater than the current weight limit (w),
            # then we cannot include it in the knapsack. So, the value remains the same
            # as the value obtained for the previous items.
            if item_weight > w:
                dp[i][w] = dp[i - 1][w]
            else:
                # Otherwise, we have two choices: either include the current item
                # or exclude it. We choose the maximum of the two.
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - item_weight] + item_value)

    # The final value in the dp table represents the maximum value Bob can obtain.
    return dp[len(items)][maximum_weight]