import fetchData from './api/fetchData';
import Table from './components/Table'

export default (async function () {
    // YOUR CODE GOES HERE
    // next line is for example only
    let test = await fetchData('orders');
    let table = new Table();
    
    document.getElementById("app").innerHTML = "<h1>Hello WG Forge</h1>";
}());
