import * as utils from '../helpers/util';

class Adapter {
  convertDataForTable(data) {
    let dataObj = data;
  
    const newData = dataObj.map(el => {
      let rowData = {};

      rowData.id = el.id;
      rowData.transaction_id = el.transaction_id;
      rowData.user_id = el.user_id;
      rowData.created_at = new Date(el.created_at).toLocaleString('en');
      rowData.total = utils.getTotal(this.currency, el.total);
      rowData.card_number = utils.getConvertedNumber(el.card_number);
      rowData.card_type = el.card_type;
      rowData.location = `${el.order_country} ${el.order_ip}`;

      return rowData;
    })
    
    
    return newData;
  }
}

export default Adapter;