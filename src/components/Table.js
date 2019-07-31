import fetchData from '../api/fetchData';

class Table {
  constructor () {
    this.fields = [
      'Transaction ID',
      'User Info',
      'Order Date',
      'Order Amount',
      'Card Number',
      'Card Type',
      'Location',
    ];
    this.orders = [];

  this.init();
  }
  async init() {
    this.orders = await fetchData('orders');
    debugger
    if (this.orders) {
      const head = this.generateHead();
      const body = this.generateBody();
      
      let table = document.createElement('table');
      table.append(head);
      table.append(body);
      console.log(table);
      document.getElementById('app').append(table);
    }

   
  }
  generateHead() {
    let tHead = document.createElement('thead');
    let fragment = document.createDocumentFragment();
    let row = document.createElement('tr');

    this.fields.forEach(field => {
      let cell = document.createElement('th');
      cell.textContent = field;

      row.append(cell);
    });

    fragment.append(row);
    tHead.append(fragment);

    return tHead;
  }
  generateBody() {
    let tBody = document.createElement('tbody');
    let fragment = document.createDocumentFragment();
    let box = document.createDocumentFragment();

    this.orders.forEach(field => {
      let row = document.createElement('tr');
      row.id = `order_${field.id}`;
      
      
      Object.values(field).forEach(key => {
        let cell = document.createElement('th');
        cell.textContent = key; 

        row.append(cell);
      })
      box.append(row);
    });

    fragment.append(box);
    tBody.append(fragment);

    return tBody;
  }

}

export default Table;