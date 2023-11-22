export class RestAPI {
  constructor(db) {
    this.db = db;
  }

  get(url) {
    // Handling GET requests
    switch (url) {
      case '/users':
        // Return the entire user database
        return this.db;
      default:
        // Extract the user name from the URL
        let { groups: { name } } = /(=)(?<name>\w+)/.exec(url);
        // Find the user with the matching name
        let matching = this.db.users.filter((x) => x.name === name);
        return { users: matching };
    }
  }

  post(url, payload) {
    // Handling POST requests
    switch (url) {
      case '/add':
        // Adding a new user to the database
        let user = { name: payload.user, owes: {}, owed_by: {}, balance: 0 };
        this.db.users.push(user);
        return user;
      case '/iou':
        // Finding the lender and borrower from the payload
        let lender, borrower;
        for (const user of this.db.users) {
          if (user.name === payload.lender) {
            lender = user;
          } else if (user.name === payload.borrower) {
            borrower = user;
          } else {
            this.db.users.splice(this.db.users.indexOf(user), 1);
          }
        }
        // Handling the IOU transaction
        if (lender.owes[borrower.name] > payload.amount) {
          borrower.owed_by[lender.name] = (borrower.owed_by[lender.name] || 0) - payload.amount;
          lender.owes[borrower.name] = (lender.owes[borrower.name] || 0) - payload.amount;
        } else {
          lender.owed_by[borrower.name] = payload.amount - (lender.owes[borrower.name] || 0);
          delete lender.owes[borrower.name];
          borrower.owes[lender.name] = payload.amount - (borrower.owed_by[lender.name] || 0);
          delete borrower.owed_by[lender.name];
        }
        if (lender.owed_by[borrower.name] === 0) {
          delete lender.owed_by[borrower.name];
        }
        if (borrower.owes[lender.name] === 0) {
          delete borrower.owes[lender.name];
        }
        lender.balance += payload.amount;
        borrower.balance -= payload.amount;
        return this.db;
    }
  }
}
