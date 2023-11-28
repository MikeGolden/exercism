const PLAYERS = new Map([
  ["B", "BLACK"],
  ["W", "WHITE"],
  ["", "NONE"],
]);

const pCoord = (p) => p.split(",").map(Number);

export class GoCounting {
  constructor(board) {
    this.board = new Map();
    for (let j = 0; j < board.length; j++) {
      let line = board[j].split("");
      for (let i = 0; i < line.length; i++)
        this.board.set(`${i},${j}`, line[i]);
    }
  }

  expand(x, y, visited = new Set()) {
    let pos = `${x},${y}`;
    if (visited.has(pos)) return visited;
    if (!this.board.has(pos)) return visited;
    let val = this.board.get(pos);
    if (/[BW]/.test(val)) return new Set([val, ...visited]);
    visited.add(pos);
    return [
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
    ].reduce((v, nxt) => this.expand(...nxt, v), visited);
  }

  getTerritory(x, y) {
    if (!this.board.has(`${x},${y}`)) return { error: "Invalid coordinate" };
    let owners = [],
      coords = [];
    for (let v of this.expand(x, y).values())
      (/[BW]/.test(v) ? owners : coords).push(v);
    let owner = owners.length == 1 && coords.length > 0 ? owners[0] : "";
    return { owner: PLAYERS.get(owner), territory: coords.sort().map(pCoord) };
  }

  getTerritories() {
    let data = { BLACK: [], WHITE: [], NONE: [] };
    Array.from(this.board.keys()).forEach((pos) => {
      let positions = Object.values(data).flat();
      if (positions.includes(pos)) return;
      let t = this.getTerritory(...pCoord(pos));
      let p = t.territory.map((p) => p.join(","));
      data[t.owner] = (data[t.owner] ?? []).concat(p);
    });
    let ret = {};
    for (let [owner, coords] of Object.entries(data)) {
      let key = "territory" + owner.charAt(0) + owner.slice(1).toLowerCase();
      ret[key] = coords.sort().map(pCoord);
    }
    return ret;
  }
}

