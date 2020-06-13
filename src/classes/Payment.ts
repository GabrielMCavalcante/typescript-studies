import HasFormatter from '../interfaces/HasFormatter'

export default class Payment implements HasFormatter {

    readonly recipient: string
    readonly details: string
    readonly amount: number

    constructor(userData: { recipient: string, details: string, amount: number }) {
        this.recipient = userData.recipient
        this.details = userData.details
        this.amount = userData.amount
    }

    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}.`
    }
}