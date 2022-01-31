import CurrencyApi from "./currency-api";

export default class Account {
  balance: number;

  constructor(readonly currencyApi: CurrencyApi) {
    this.balance = 0;
  }

  credit(value: number, currency?: string) {
    if (!currency) return (this.balance += value);
    this.balance += this.currencyApi.convert(value, currency);
  }

  debit(value: number) {
    this.balance -= value;
  }

  getBalance() {
    return this.balance;
  }
}
