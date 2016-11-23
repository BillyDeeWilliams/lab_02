'use strict';

var storeHours;
storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];
var hours;
hours = storeHours.length;

// Lets make a Constructor robot for them there objects
function SalmonStore ( name, min, max, avgSale) {
  this.name = name;
  this.minHourlyCustos = min;
  this.maxHourlyCustos = max;
  this.avgPurchaseSize = avgSale;
  this.dailyTotal = 0;
  this.hours = 15;
  this.storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];
  this.salesRecord = [];
  this.custosPerHr = 0;
}
SalmonStore.prototype.hourstOpen = function (){
  this.hours = this.storeHours.length;
};

SalmonStore.prototype.setCustosPerHr = function () {
  var custoEstimate;
  var min = Math.ceil(this.minHourlyCustos);
  var max = Math.floor(this.maxHourlyCustos);
  custoEstimate = Math.floor(Math.random() * (max - min)) + min;
  this.custosPerHr = custoEstimate;
};

SalmonStore.prototype.populateSalesData = function (){
  var salesthathour;
  this.salesRecord = [];
  this.dailyTotal = 0;
  this.salesRecord.push(this.name);
  for ( var i = 1 ; i <= this.storeHours.length; i ++){
    this.setCustosPerHr();
    salesthathour = this.custosPerHr * this.avgPurchaseSize;
    this.salesRecord[i] = Math.ceil(salesthathour);
    this.dailyTotal += salesthathour;
  };
  this.dailyTotal = Math.ceil(this.dailyTotal);
  this.salesRecord.push('Total: ' + this.dailyTotal + ' cookies');
};

SalmonStore.prototype.populateSalesDataList = function (){
  var salesthathour;
  this.salesRecord = [];
  this.dailyTotal = 0;
  this.salesRecord.push(this.name);
  for ( var i = 1 ; i < this.storeHours.length; i ++){
    this.setCustosPerHr();
    salesthathour = this.custosPerHr * this.avgPurchaseSize;
    this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies';
    this.dailyTotal += salesthathour;
  };
  this.dailyTotal = Math.ceil(this.dailyTotal);
  this.salesRecord.push('Total: ' + this.dailyTotal + ' cookies');
};

SalmonStore.prototype.listSalesData = function(){
  this.populateSalesDataList();
  var contentArea = document.getElementById('content_area');
  var listTitle = document.createElement('p');
  var salesDataList = document.createElement('ul');
  var salesData;
  listTitle.textContent = this.salesRecord[0];
  // listTitle.id = 'test'; this will set the id of the node so cool!!!
  contentArea.appendChild(listTitle);
  for (var i = 1; i < this.salesRecord.length; i++){
    salesData = document.createElement('li');
    salesData.textContent = this.salesRecord[i];
    salesDataList.appendChild(salesData);
  }
  contentArea.appendChild(salesDataList);
};

SalmonStore.prototype.headerToHTML = function () {
  var table = document.getElementById('salmon_table');
  var tableRow = document.createElement('tr');
  var blankHeaderCell = document.createElement('th');
  var tableHeaderCell;

  blankHeaderCell.textContent = '';
  tableRow.appendChild(blankHeaderCell); // first cell is blank

  //populate header loop
  for( var i = 0; i < (this.storeHours.length ); i++){
    tableHeaderCell = document.createElement('th'); // create a new table header cell
    tableHeaderCell.textContent = this.storeHours[i]; // populate the cell
    tableRow.appendChild(tableHeaderCell); //build row by appending th cells containing values from store hours
  }

  tableHeaderCell = document.createElement('th');
  tableHeaderCell.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHeaderCell); // last column heading in header row
  table.appendChild(tableRow); // append row into table

};

SalmonStore.prototype.generateStoreDataTableRow = function() {
  var table = document.getElementById('salmon_table'); //get table
  var tbody = document.createElement('tbody'); //creat tablebody tbody
  var rows = document.createElement('tr'); //create row
  // var tableHeaderCell;
  // for( var i = 0; i < this.storeHours.length; i++){
  //   tableHeaderCell = document.createElement('th'); // create a new table header cell
  var td;
  this.populateSalesData(); // generates data to publish
  td = document.createElement('td'); // first elemetn in sales record array should be the store name, so we put this in first cell for the row
  td.textContent = this.salesRecord[0];
  rows.appendChild(td);
  if(this.salesRecord.length < 2){
    alert('insuficient data to generate table \n please populate sales record first');
  }
  else {
    for( var i = 1 ; i <= this.salesRecord.length - 1 ; i++){
    // starting at the second element in the sales data array, for as many times as there are leements remaining do this:
      td = document.createElement('td');
      td.textContent = this.salesRecord[i] + ' cookies';
      rows.appendChild(td);
    }
    tbody.appendChild(rows);
    table.appendChild(tbody);
    //identify table body
    // populate tr row td cell by td cell
    // append table body with row
    //later we will use the body to access the value of the cells in each column *not counting the first header row or last (totals) row
  }
};

SalmonStore.prototype.lastRow = function(){
//this will be for the totals row
};


//now we need to create instances of our stores and then call their row generatin methods to produce our table
//then we will stype appropriately with CSS
//finaly we will add a form where upon field containing the necessary property information may be submited to
//generate a new store or change store data and the row generating call will update in real time
var collectionofStores = [];
var pike = new SalmonStore ('1st and Pike', 23, 65, 6.3);
var seaTac = new SalmonStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new SalmonStore('Seattle Center', 11 , 38, 3.7);
var capHill  = new SalmonStore('Capitol Hill', 20, 38, 2.3);
var alki = new SalmonStore('Alki', 2, 16, 4.6);
collectionofStores = [pike, seaTac, seattleCenter, capHill, alki];

//later we can maeke similar happen individually as we want, or trigger then with a listener.
// for now they are hoard coded into the following function
function generateStoreTable() {
  pike.headerToHTML();
  pike.generateStoreDataTableRow();
  seaTac.generateStoreDataTableRow();
  seattleCenter.generateStoreDataTableRow();
  capHill.generateStoreDataTableRow();
  alki.generateStoreDataTableRow();
}

generateStoreTable();
//first table with urrent data is generated. a form is available below the table for input to change data
//or create new instances of stares and then populate the table acordingly
//=======================================================================================================================================================//
//KVN structure convention
//above is good, blow is under construction
//======================================================================================================================================================//


//lets use bottons to call our HTML generation
var salmonForm = document.getElementById('salmon_form');
salmonForm.addEventListener('submit', handleForm);
//salmonForm point at the form we're working with. then we add an evenlistener to call handleform when triggered by submit
//defin the handle function belwo and apass it a named event argument so we can refer to the properties of the event in real time

function buildHeader () {
  var table = document.getElementById('salmon_table');
  var tableHeader = document.createElement('thead');
  var tableRow = document.createElement('tr');
  var blankHeaderCell = document.createElement('th');
  var tableHeaderCell;

  blankHeaderCell.textContent = ''; // first cell is blank
  tableRow.appendChild(blankHeaderCell);   //populate header loop

  for( var i = 0; i < hours ; i++){ //loop through all bur the first element
    tableHeaderCell = document.createElement('th'); // create a new table header cell
    tableHeaderCell.textContent = storeHours[i]; // populate the cell
    tableRow.appendChild(tableHeaderCell); //build row by appending th cells containing values from store hours
  }

  tableHeaderCell = document.createElement('th');
  tableHeaderCell.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHeaderCell); // last column heading in header row
  tableHeader.appendChild(tableRow); // append entrie row into table header section
  table.appendChild(tableHeader); // append row into table

}

function bodyBuilder (){

  for(var i = 0; i < collectionofStores.length; i++){ //for as many stores as are in the collection
    collectionofStores[i].generateStoreDataTableRow();
  }
}



function buildFooter(){
  var salmonTable = document.getElementById('salmon_table');
  var salmonFooter = document.createElement('tfoot');
  var salmonRow = document.createElement('tr');
  var footerCell = document.createElement('td');
  var hourlyTotal;
  footerCell.textContent = ' Totals ';
  salmonRow.appendChild(footerCell); // first cell in fotter contains text saying "totals"

  for (var i = 0 ; i < hours ; i++){// there are 15 columns, 15 hour values for each one:
    hourlyTotal = 0; //init count
    for (var j = 0; j < collectionofStores.length ; j++){ //for as many stores as ther are rows for
      hourlyTotal += collectionofStores[j].salesRecord[i + 1]; //sum column
    }
    footerCell = document.createElement('td');
    footerCell.textContent = hourlyTotal; //store column sum in td cell
    console.log(footerCell , hourlyTotal);
    salmonRow.appendChild(footerCell); // append footer row with a data cell at a time
  }

  salmonFooter.appendChild(salmonRow);
  salmonTable.appendChild(salmonFooter);
}
function handleForm (event){
  event.preventDefault();

  var salmonTable = document.getElementById('salmon_table');
  salmonTable.textContent = ''; //clears table

  buildHeader(); // calls build header unction and build the header.
  bodyBuilder(); //builds a row fore each store Object in the collection of stores array
  buildFooter();
}
