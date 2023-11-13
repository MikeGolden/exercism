export const tournamentTally = (matches) => {
  // Create an object to store the team statistics
  const stats = {};

  // Traverse the array of matches
  matches.forEach((match) => {
    // Update the team statistics
    const [team1, team2, result] = match.split(";");
    const points = result === "win" ? 3 : result === "draw" ? 1 : 0;
    ["team1", "team2"].forEach((team) => {
      if (!stats[team]) {
        stats[team] = {
          team: team,
          played: 0,
          won: 0,
          drawn: 0,
          lost: 0,
          points: 0,
        };
      }
      stats[team].played++;
      stats[team].points += points;
      stats[team].won += result === "win" ? 1 : 0;
      stats[team].drawn += result === "draw" ? 1 : 0;
      stats[team].lost += result === "loss" ? 1 : 0;
    });
  });

  // Sort the teams by points in descending order and alphabetically
  const sortedStats = Object.values(stats).sort((a, b) => {
    if (a.points === b.points) {
      return a.team.localeCompare(b.team);
    }
    return b.points - a.points;
  });

  // Format result as a string
  const result = sortedStats
    .map(
      (stat) =>
        `${stat.team.padEnd(32)} | ${stat.played
          .toString()
          .padEnd(3)} | ${stat.won.toString().padEnd(3)} | ${stat.drawn
          .toString()
          .padEnd(3)} | ${stat.lost.toString().padEnd(3)} | ${stat.points
          .toString()
          .padEnd(3)}`,
    )
    .join("\n");

  return result;
};
