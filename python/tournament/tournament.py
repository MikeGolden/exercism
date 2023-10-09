from collections import defaultdict

def tally(rows):
    # Define the format for table rows
    fmt = '{:<30} | {:>2} | {:>2} | {:>2} | {:>2} | {:>2}'
    # Initialize the table with the header
    table = [fmt.format('Team', 'MP', 'W', 'D', 'L', 'P')]
    # Initialize a defaultdict to store team results
    results = defaultdict(lambda: [0, 0, 0, 0])

    # Iterate over each match result
    for row in rows:
        team_a, team_b, result = row.split(';')

        # Update matches played for both teams
        results[team_a][0] += 1
        results[team_b][0] += 1

        # Update wins, draws, and losses based on the result
        if result == 'win':
            results[team_a][1] += 1
            results[team_b][3] += 1
        elif result == 'loss':
            results[team_a][3] += 1
            results[team_b][1] += 1
        else:
            results[team_a][2] += 1
            results[team_b][2] += 1

    # Sort teams by points (descending) and then by team name (ascending)
    teams = sorted(results.items(), key=lambda x: (-(x[1][1] * 3 + x[1][2]), x[0]))

    # Create rows for each team and add them to the table
    for name, result in teams:
        table.append(fmt.format(name, *result, result[1] * 3 + result[2]))

    # Return the table as a list of formatted strings
    return table
