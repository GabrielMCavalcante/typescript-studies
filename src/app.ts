import Invoice from './classes/Invoice.js'
import Payment from './classes/Payment.js'
import ListTemplate from './classes/ListTemplate.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ordersList = new ListTemplate(document.querySelector('ul')!)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let newOrder: Invoice | Payment
    
    let values: [string, string, number] = [
        tofrom.value, 
        details.value, 
        amount.valueAsNumber
    ]

    if (type.value === 'invoice') 
        newOrder = new Invoice(...values) 
    else 
        newOrder = new Payment(...values)
    
    ordersList.render(newOrder, type.value, 'end')
})