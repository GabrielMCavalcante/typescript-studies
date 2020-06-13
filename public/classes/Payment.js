export default class Payment {
    constructor(userData) {
        this.recipient = userData.recipient;
        this.details = userData.details;
        this.amount = userData.amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}.`;
    }
}
