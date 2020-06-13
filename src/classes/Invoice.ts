import HasFormatter from '../interfaces/HasFormatter'

export default class Invoice implements HasFormatter {

    readonly client: string
    readonly details: string
    readonly amount: number

    constructor(userData: { client: string, details: string, amount: number }) {
        this.client = userData.client
        this.details = userData.details
        this.amount = userData.amount
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`
    }
}