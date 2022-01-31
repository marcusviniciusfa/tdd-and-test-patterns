export default interface CurrencyApi {
    convert(value: number, currency: string): number
}