import fetchData from './api/fetchData';
import Table from './components/Table'
import tableSchema from './helpers/tableSchema';
import Adapter from './helpers/adapter';

export default (async function () {
    const adapter = new Adapter();

    const tableHeader = tableSchema;
    const orders = await fetchData('orders');
    
    let table = new Table({
      el: '#app',
      header: tableHeader,
      data: orders,
      adapter: adapter.convertDataForTable,
    });
    
}());
