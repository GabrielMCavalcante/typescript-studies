export default class ListTemplate {
    constructor(listEl) {
        this.listEl = listEl;
    }
    render(order, heading, position) {
        const orderLi = document.createElement('li');
        const orderLiTitle = document.createElement('h4');
        orderLiTitle.innerHTML = heading;
        orderLi.appendChild(orderLiTitle);
        const orderLiDetails = document.createElement('p');
        orderLiDetails.innerHTML = order.format();
        orderLi.appendChild(orderLiDetails);
        switch (position) {
            case 'start':
                {
                    this.listEl.prepend(orderLi);
                    break;
                }
            case 'end':
                {
                    this.listEl.append(orderLi);
                    break;
                }
            default: this.listEl.append(orderLi);
        }
    }
}
