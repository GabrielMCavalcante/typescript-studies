"use strict";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const addBtn = document.querySelector('button');
const ordersList = document.querySelector('ul');
const orders = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        client: tofrom.value,
        details: details.value,
        amount: amount.valueAsNumber
    };
    let newOrder;
    if (type.value === 'invoice')
        newOrder = new Invoice(userData);
    else
        newOrder = new Payment(userData);
    orders.push(newOrder);
    ordersList.innerHTML = '';
    orders.forEach(order => {
        const orderLi = document.createElement('li');
        const orderLiTitle = document.createElement('h4');
        orderLiTitle.innerHTML = order.client;
        const orderLiDetails = document.createElement('p');
        orderLiDetails.innerHTML = order.format();
        orderLi.appendChild(orderLiTitle);
        orderLi.appendChild(orderLiDetails);
        ordersList.appendChild(orderLi);
    });
});
class Invoice {
    constructor(userData) {
        this.client = userData.client;
        this.details = userData.details;
        this.amount = userData.amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`;
    }
}
class Payment {
    constructor(userData) {
        this.client = userData.client;
        this.details = userData.details;
        this.amount = userData.amount;
    }
    format() {
        return `${this.client} is owned £${this.amount} for ${this.details}.`;
    }
}