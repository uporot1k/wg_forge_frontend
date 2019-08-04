import fetchData from '../api/fetchData';

class Table {
  constructor (obj) {
    this.header = obj.header;
    this.fields = {};
    this.orders = obj.data;
    this.adapter = obj.adapter;     
    this.currency = 'USD';
    this.rows = [];
  this.init();
  }
  async init() {

      if (typeof this.adapter == 'function') {
        this.orders = this.adapter(this.orders);

      }

      const head = this.generateHead();
      const body = this.generateBody();

      let table = document.createElement('table');
      table.append(head);
      table.append(body);

      document.getElementById('app').append(table);
    
      this.fillUsersCell();
   
  }
  generateHead() {
    let tHead = document.createElement('thead');
    let fragment = document.createDocumentFragment();
    let row = document.createElement('tr');

    this.header.forEach(item => {
      let cell = document.createElement('th');
      cell.textContent = item.title;

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
      box.append(row);
    });

    fragment.append(box);
    tBody.append(fragment);

    return tBody;
  }
  generateRow(data) {
    const rowData = data;

    let row = this.drawRowTemplate(rowData);
    this.rows.push(row);

    return row;
  }
  drawRowTemplate(data) {
    const rowData = data;
    
    let box = document.createElement('tr');
    box.id = `order_${rowData.id}`;

    const template = `
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
  fillUsersCell() {
    const users = this.users;

    this.rows.forEach(row => {
      const userCell = row.querySelector('.user-data');
      const userId = userCell.textContent;
      this.drawUserCell(userCell);
    });
  }
  drawUserCell (data) {

  }
}

export default Table;