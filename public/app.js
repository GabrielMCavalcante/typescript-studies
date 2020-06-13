import Invoice from './classes/Invoice.js';
import Payment from './classes/Payment.js';
import ListTemplate from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ordersList = new ListTemplate(document.querySelector('ul'));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newOrder;
    let values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber
    ];
    if (type.value === 'invoice')
        newOrder = new Invoice(...values);
    else
        newOrder = new Payment(...values);
    ordersList.render(newOrder, type.value, 'end');
});
