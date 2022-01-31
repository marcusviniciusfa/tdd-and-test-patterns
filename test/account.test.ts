import sinon from 'sinon'
import Account from '../src/account'
import CurrencyApi from '../src/currency-api'
import CurrencyApiFake from '../src/currency-api-fake'

let account: Account
let currencyApi: CurrencyApi

beforeEach(function() {
    currencyApi = new CurrencyApiFake()
    account = new Account(currencyApi)
})

test('Deve criar uma conta', function() {
    const balance = account.getBalance()
    expect(balance).toBe(0)
})

test('Deve fazer um crédito de R$100,00', function() {
    account.credit(100)
    const balance = account.getBalance()
    expect(balance).toBe(100)
})

test('Deve fazer um débito de R$50,00', function() {
    account.credit(100)
    account.debit(50)
    const balance = account.getBalance()
    expect(balance).toBe(50)
})

test('Deve fazer um crédito de $100,00 com fake', function() {
    account.credit(100, 'USD')
    const balance = account.getBalance()
    expect(balance).toBe(500)
})

test('Deve fazer um crédito de $100,00 com stub', function() {
    sinon.stub(currencyApi, 'convert').returns(600)
    account.credit(100, 'USD')
    const balance = account.getBalance()
    expect(balance).toBe(600)
})

test('Deve criar uma conta com spy', function() {
    const accountSpy = sinon.spy(account, 'getBalance')
    account.getBalance()
    sinon.assert.calledOnce(accountSpy)
})

test('Deve fazer um crédito de $100,00 com mock', function() {
    const accountMock = sinon.mock(account)
    accountMock.expects('credit').once().withArgs(100, 'USD')
    accountMock.expects('getBalance').once().returns(600)
    account.credit(100, 'USD')
    const balance = account.getBalance()
    expect(balance).toBe(600)
    accountMock.verify()
})