import Invoice from './classes/Invoice.js'
import Payment from './classes/Payment.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const addBtn = document.querySelector('button')!

const ordersList = document.querySelector('ul')!

const orders: (Invoice | Payment)[] = []

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    const userData = { 
        details: details.value, 
        amount: amount.valueAsNumber, 
    }

    let newOrder: Invoice | Payment
    
    if (type.value === 'invoice') 
        newOrder = new Invoice({...userData, client: tofrom.value}) 
    else 
        newOrder = new Payment({...userData, recipient: tofrom.value})
    
    orders.push(newOrder)

    ordersList.innerHTML = ''

    orders.forEach(order => {
        const orderLi = document.createElement('li')
        const orderLiTitle = document.createElement('h4')

        if(order instanceof Invoice)
            orderLiTitle.innerHTML = order.client
        else if(order instanceof Payment)
            orderLiTitle.innerHTML = order.recipient

        const orderLiDetails = document.createElement('p')
        orderLiDetails.innerHTML = order.format()

        orderLi.appendChild(orderLiTitle)
        orderLi.appendChild(orderLiDetails)

        ordersList.appendChild(orderLi)
    })
})