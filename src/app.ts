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
        client: tofrom.value, 
        details: details.value, 
        amount: amount.valueAsNumber 
    }

    let newOrder: Invoice | Payment
    
    if (type.value === 'invoice') newOrder = new Invoice(userData)
    else newOrder = new Payment(userData)
    
    orders.push(newOrder)

    ordersList.innerHTML = ''

    orders.forEach(order => {
        const orderLi = document.createElement('li')
        const orderLiTitle = document.createElement('h4')
        orderLiTitle.innerHTML = order.client

        const orderLiDetails = document.createElement('p')
        orderLiDetails.innerHTML = order.format()

        orderLi.appendChild(orderLiTitle)
        orderLi.appendChild(orderLiDetails)

        ordersList.appendChild(orderLi)
    })
})

class Invoice {

    readonly client: string
    readonly details: string
    readonly amount: number

    constructor(userData: { client: string, details: string, amount: number }) {
        this.client = userData.client
        this.details = userData.details
        this.amount = userData.amount
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`
    }
}

class Payment {

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