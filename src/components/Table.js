import fetchData from '../api/fetchData';
import * as utils from '../helpers/util';
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
    this.currency = 'USD';
  this.init();
  }
  async init() {
    this.orders = await fetchData('orders');
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
      let row = this.generateRow(field);
      debugger
      box.append(row);
    });

    fragment.append(box);
    tBody.append(fragment);

    return tBody;
  }
  generateRow(data) {
    let rowData = this.prepeareDataForRow(data);
    let box = document.createElement('tr');

    box.id = `order_${rowData.id}`;

    let template = `
      <td>${rowData.transaction_id}</td>
      <td class='user-data'>${rowData.user_id}</td>
      <td>${rowData.created_at}</td>
      <td>${rowData.total}</td>
      <td>${rowData.card_number}</td>
      <td>${rowData.card_type}</td>
      <td>${rowData.location}</td>
    `;

    box.innerHTML = template;
    
    return box;
  }
  prepeareDataForRow(data) {
    let dataObj = data;
    let rowData = {};

    rowData.id = data.id;
    rowData.transaction_id = dataObj.transaction_id;
    rowData.user_id = dataObj.user_id;
    rowData.created_at = new Date(dataObj.created_at).toLocaleString('en');
    rowData.total = utils.getTotal(this.currency, dataObj.total);
    rowData.card_number = utils.getConvertedNumber(dataObj.card_number);
    rowData.card_type = dataObj.card_type;
    rowData.location = `${dataObj.order_country} ${dataObj.order_ip}`;
    
    return rowData;
  }

}

export default Table;