export const tournamentTally = (input) => {
  const header = ["Team                           | MP |  W |  D |  L |  P"];

  if (input.length === 0) return String(header);

  let results = [];
  const stats = {};
  
  input = input.split("\n").map((x) => x.split(";"));

  for (const game of input) {
    if (!stats.hasOwnProperty(game[0])) stats[game[0]] = [0, 0, 0, 0, 0]
    if (!stats.hasOwnProperty(game[1])) stats[game[1]] = [0, 0, 0, 0, 0]

    stats[game[0]][0]++;
    stats[game[1]][0]++;

    switch (game[2]) {
      case "win":
        stats[game[0]][1]++;
        stats[game[0]][4] += 3;
        stats[game[1]][3]++;
        break;
      case "draw":
        stats[game[0]][2]++;
        stats[game[0]][4]++;
        stats[game[1]][2]++;
        stats[game[1]][4]++;
        break;
      case "loss":
        stats[game[0]][3]++;
        stats[game[1]][1]++;
        stats[game[1]][4] += 3;
        break;
    }
  }

  for (const [team, scores] of Object.entries(stats)) {
    results.push((`${team.padEnd(30, " ")} ` + 
                scores.reduce((acc, curr) => acc + `|${String(curr).padStart(3, " ")} `, "")
                ).slice(0, -1));
  }

  
  return header.concat(results.sort().sort((a, b) => b.match(/\d+$/) - a.match(/\d+$/))).join("\n");
};