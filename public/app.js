import Invoice from './classes/Invoice.js';
import Payment from './classes/Payment.js';
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
        details: details.value,
        amount: amount.valueAsNumber,
    };
    let newOrder;
    if (type.value === 'invoice')
        newOrder = new Invoice({ ...userData, client: tofrom.value });
    else
        newOrder = new Payment({ ...userData, recipient: tofrom.value });
    orders.push(newOrder);
    ordersList.innerHTML = '';
    orders.forEach(order => {
        const orderLi = document.createElement('li');
        const orderLiTitle = document.createElement('h4');
        if (order instanceof Invoice)
            orderLiTitle.innerHTML = order.client;
        else if (order instanceof Payment)
            orderLiTitle.innerHTML = order.recipient;
        const orderLiDetails = document.createElement('p');
        orderLiDetails.innerHTML = order.format();
        orderLi.appendChild(orderLiTitle);
        orderLi.appendChild(orderLiDetails);
        ordersList.appendChild(orderLi);
    });
});
