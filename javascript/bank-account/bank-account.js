// BankAccount class represents a simple bank account with open, close, deposit, withdraw, and balance operations.
export class BankAccount {
  constructor() {
    this._balance = 0; // Initialize balance to 0
    this._isOpen = false; // Initially, the account is not open
  }

  // Opens the bank account
  open() {
    if (this._isOpen) throw new ValueError(); // Throw an error if the account is already open
    this._isOpen = true; // Set the account to open
  }

  // Closes the bank account
  close() {
    if (!this._isOpen) throw new ValueError(); // Throw an error if the account is not open
    this._isOpen = false; // Set the account to closed
    this._balance = 0; // Reset the balance to 0
  }

  // Deposits the specified amount into the bank account
  deposit(amount) {
    if (!this._isOpen || amount < 0) throw new ValueError(); // Throw an error if the account is not open or the amount is negative
    this._balance += amount; // Add the amount to the balance
  }

  // Withdraws the specified amount from the bank account
  withdraw(amount) {
    if (!this._isOpen || amount < 0 || amount > this._balance) {
      throw new ValueError(); // Throw an error for invalid withdrawal conditions
    }
    this._balance -= amount; // Subtract the amount from the balance
  }

  // Gets the current balance of the bank account
  get balance() {
    if (!this._isOpen) throw new ValueError(); // Throw an error if the account is not open
    return this._balance; // Return the current balance
  }
}

// Custom ValueError class for bank account errors
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
