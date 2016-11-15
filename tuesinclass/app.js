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

  headerRow.appendChild(blankTableHeader); // insert blanck cell in the beginngin of header row

  for(var i = 0; i < hours.length; i++){
    hourlyTableheader = document.createElement('th');
    hourlyTableheader.textContent = hours[i];
    headerRow.appendChild(hourlyTableheader);
  }
  totalTableheader.textContent = 'Total';
  headerRow.appendChild(totalTableheader);

  storeTable.appendChild(headerRow);
}

renderHeaderRow();

// cooke store constructor:
function CookieStore (newStoreObject, min, max) {
  this.name = newStoreObject;
  this.hourlymincustos = min;
  this.hourlymaxcustos = max;
}


var pike = new CookieStore('pike', 1 , 10); //creates a new instance of CookieStore

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
