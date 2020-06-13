export default class Payment {

    readonly client: string
    readonly details: string
    readonly amount: number

    constructor(userData: { client: string, details: string, amount: number }) {
        this.client = userData.client
        this.details = userData.details
        this.amount = userData.amount
    }

    format() {
        return `${this.client} is owned £${this.amount} for ${this.details}.`
    }
}