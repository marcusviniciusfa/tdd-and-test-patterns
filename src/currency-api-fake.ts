import CurrencyApi from "./currency-api";

export default class CurrencyApiFake implements CurrencyApi {
  convert(value: number, currency: string): number {
    return value * 5;
  }
}
