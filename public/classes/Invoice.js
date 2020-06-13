export default class Invoice {
    constructor(userData) {
        this.client = userData.client;
        this.details = userData.details;
        this.amount = userData.amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`;
    }
}
