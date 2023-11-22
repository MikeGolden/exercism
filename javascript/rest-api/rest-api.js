//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor(db) {
    this.db = db
  }

  get(url) {
    switch (url) {
      case '/users': return this.db
      default: 
        let { groups: { name } } = /(=)(?<name>\w+)/.exec(url)
        let matching = this.db.users.filter((x) => x.name === name)
        return {users: matching}
        
    }
  }

  post(url, payload) {
    switch (url) {
      case '/add': 
        let user = {name: payload.user, owes: {}, owed_by: {}, balance: 0,}
        this.db.users.push(user)
        return user
      case '/iou':
        for (const user of this.db.users) {
          if (user.name === payload.lender) {
            var lender = user
          } else if (user.name === payload.borrower) {
            var borrower = user
          } else {
            this.db.users.splice(this.db.users.indexOf(user), 1)
          }
        }
        if (lender.owes[borrower.name] > payload.amount) {
          borrower.owed_by[lender.name] = (borrower.owed_by[lender.name] || 0) - payload.amount
          lender.owes[borrower.name] = (lender.owes[borrower.name] || 0) - payload.amount
        } else  { 
          lender.owed_by[borrower.name] = payload.amount - (lender.owes[borrower.name] || 0)
          delete lender.owes[borrower.name]
          borrower.owes[lender.name] = payload.amount - (borrower.owed_by[lender.name] || 0)
          delete borrower.owed_by[lender.name]
        }
        if (lender.owed_by[borrower.name] === 0 ) {
          delete lender.owed_by[borrower.name]
        }
        if ( borrower.owes[lender.name] === 0) {
          delete borrower.owes[lender.name]
        }
        lender.balance += payload.amount
        borrower.balance -= payload.amount
        return this.db
    }
  }
}