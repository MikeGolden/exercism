export class RestAPI {
  constructor(database = {}) {
    this.database = database;
  }

  get(url) {
    const [endpoint, queryParams] = url.split("?");
    const queryObj = this.parseQueryParams(queryParams);

    switch (endpoint) {
      case "/users":
        return this.getUsers(queryObj.users);
      default:
        return { error: "Endpoint not found" };
    }
  }

  post(url, payload) {
    const [endpoint] = url.split("/");

    switch (endpoint) {
      case "add":
        return this.createUser(payload.user);
      case "iou":
        return this.createIOU(payload.lender, payload.borrower, payload.amount);
      default:
        return { error: "Endpoint not found" };
    }
  }

  parseQueryParams(queryParams) {
    if (!queryParams) return {};
    const params = new URLSearchParams(queryParams);
    const result = {};
    for (const [key, value] of params) {
      result[key] = value.split(",");
    }
    return result;
  }

  getUsers(users) {
    const userList = Object.keys(this.database).sort();
    const filteredUsers = userList.filter(
      (user) => !user || user.includes(user),
    );
    const userObjects = filteredUsers.map((user) => this.getUserObject(user));
    return { users: userObjects };
  }

  createUser(userName) {
    if (this.database[userName]) {
      return { error: "User already exists" };
    }
    this.database[userName] = {
      name: userName,
      owes: {},
      owed_by: {},
      balance: 0.0,
    };
    return this.getUserObject(userName);
  }

  createIOU(lender, borrower, amount) {
    if (!this.database[lender] || !this.database[borrower]) {
      return { error: "Invalid lender or borrower" };
    }

    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) {
      return { error: "Invalid amount" };
    }

    this.database[lender].owes[borrower] =
      (this.database[lender].owes[borrower] || 0) + amount;
    this.database[borrower].owed_by[lender] =
      (this.database[borrower].owed_by[lender] || 0) + amount;
    this.updateBalances(lender);
    this.updateBalances(borrower);

    return {
      users: [this.getUserObject(lender), this.getUserObject(borrower)],
    };
  }

  getUserObject(userName) {
    const user = this.database[userName];
    const balance = this.calculateBalance(userName);
    return {
      name: user.name,
      owes: user.owes,
      owed_by: user.owed_by,
      balance: balance,
    };
  }

  calculateBalance(userName) {
    const user = this.database[userName];
    const owesTotal = Object.values(user.owes).reduce(
      (total, amount) => total + amount,
      0,
    );
    const owedByTotal = Object.values(user.owed_by).reduce(
      (total, amount) => total + amount,
      0,
    );
    return owedByTotal - owesTotall;
  }

  updateBalances(userName) {
    this.database[userName].balance = this.calculateBalance(userName);
  }
}
