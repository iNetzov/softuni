class Account {
  private static _id: number = 1;
  private _balance: number = 0;
  private static _interestRate: number = 0.02;

  constructor() {}
  private id() {
    return ++Account._id;
  }
  //   BALANCE
  public get balance() {
    return this._balance;
  }
  public set balance(newBalance: number) {
    this._balance = newBalance;
  }
  //   InterestRate
  public get interestRate() {
    return Account._interestRate;
  }
  public set interestRate(newRate: number) {
    Account._interestRate = newRate;
  }
  public deposit(value: number) {
    let oltBalance = this.balance;
    this.balance = oltBalance + value;
  }
}

const userOne = new Account();
const userTwo = new Account();

userOne.deposit(20);
userTwo.deposit(10);
userOne.interestRate = 1.5;
console.log(userOne.interestRate);
console.log(userTwo.interestRate);
