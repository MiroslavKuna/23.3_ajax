const body = document.querySelector('body');

$.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/list',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        let text = document.createElement('p');
        localStorage.setItem('coins', JSON.stringify(data));
        text.innerHTML = 'Server is up and running!';
        body.appendChild(text);
    },
    error: function(error) {
        let text = document.createElement('p');
        text.innerHTML = JSON.stringify(error);
        body.appendChild(text);
    }
});

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }  

let table = document.querySelector("table");
let data = Object.keys(JSON.parse(localStorage.getItem('coins'))[0]);
generateTable(table, data);
generateTableHead(table, data);