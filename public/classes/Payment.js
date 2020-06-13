export default class Payment {
    constructor(userData) {
        this.client = userData.client;
        this.details = userData.details;
        this.amount = userData.amount;
    }
    format() {
        return `${this.client} is owned £${this.amount} for ${this.details}.`;
    }
}
