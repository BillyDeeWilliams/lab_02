'use strict';
var hours = ['6am','7am','8am'];


//generate unique table cells first
//generate repetative action required cell data/ created and place cells last
function renderHeaderRow(){
  var storeTable = document.getElementById('dynamic_table');
  var headerRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableheader = document.createElement('th');
  var hourlyTableheader;

  tableRow.appendChild(blankTableHeader); // insert black cell

  for(var i = 0; i < hours.length; i++){
    hourlyTableheader = document.createElement('th');
    hourlyTableheader.textContent = hours[i];
    tableRow.appendChild(hourlyTableheader);
  }
  totalTableheader.textContent = 'Total';
  tableRow.appendChild(totalTableheader);

  storeTable.appendChild(headerRow);
}
renderHeaderRow();


function CookieStore (newStoreObject) {
  this.name = newStoreObject;



}

var pike = new CookieStore('pike'); //creates a new instance of CookieStore

CookieStore.prototype.logOutName = function () {
  console.log(this.name);
};

CookieStore.prototype.toHTML = function () {
  var table = document.getElementById('dynamic_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTabledata = document.createElement('td');
  var hourlyTableData;

  nameTableHeader.textContent = this.name;
  tableRow.appendChild(nameTableHeader);
  for( var i = 0; i < this.hours.length; i++){
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = 'somedata';
    tableRow.appendChild(hourlyTableData);
  }

  totalTabledata.textContent = 15;

  tableRow.appendChild(totalTabledata);

  table.appendChild(tableRow);

};
