'use strict';
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
  for ( var i = 1 ; i < this.storeHours.length; i ++){
    this.setCustosPerHr();
    salesthathour = this.custosPerHr * this.avgPurchaseSize;
    this.salesRecord[i] = Math.ceil(salesthathour) + ' cookies';
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
  var table = document.getElementById('dynamic');
  var tableRow = document.createElement('tr');
  var blankHeaderCell = document.createElement('th');
  var tableHeaderCell;
  blankHeaderCell.textContent = '';
  tableRow.appendChild(blankHeaderCell); // first cell is blank
  //populate header loop
  for( var i = 0; i < this.storeHours.length; i++){
    tableHeaderCell = document.createElement('th'); // create a new table header cell
    tableHeaderCell.textContent = this.storeHours[i]; // populate the cell
    tableRow.appendChild(tableHeaderCell); //build row by appending th cells containing values from store hours
  }
  table.appendChild(tableRow); // append row into table
};

SalmonStore.prototype.generateStoreDataTableRow = function() {
  var table = document.getElementById('dynamic'); //get table
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
    for( var i = 1 ; i < this.salesRecord.length; i++){ // starting at the second element in the sales data array, for as many times as there are leements remaining do this:
      td = document.createElement('td');
      td.textContent = this.salesRecord[i];
      rows.appendChild(td);
    }
    tbody.appendChild(rows);
    table.appendChild(tbody);
  }
};

//identify table body
// populate tr row td cell by td cell
// append table body with row
//
//later we will use the body to access the value of the cells in each column *not counting the first header row or last (totals) row
//
//now we need to create instances of our stores and then call their row generatin methods to produce our table
//then we will stype appropriately with CSS
//finaly we will add a form where upon field containing the necessary property information may be submited to generate a new store or change store data and the row generating call will update in real time














//
// var pike  = {
//   name : '1st and Pike',
//   minHourlyCustos : 23,
//   maxHourlyCustos: 65,
//   avgPurchaseSize : 6.3,
//   dailyTotal: 0,
//   hours: 15,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
//   setHoursOpen: function () {
//     this.hours = this.storeHours.length;
//   },
//   salesRecord: [],
//
//   setCustosPerHr: function () {
//     var custoEstimate;
//     var min = Math.ceil(this.minHourlyCustos);
//     var max = Math.floor(this.maxHourlyCustos);
//     custoEstimate = Math.floor(Math.random() * (max - min)) + min;
//     this.custosPerHr = custoEstimate ;
//   },
//
//   populateSalesData : function () {
//     var salesthathour;
//     this.salesRecord = []; //blanks it out
//     this.dailyTotal = 0;
//     this.salesRecord.push(this.name); // put name as first element in sales data array
//     for (var i = 1 ; i < this.storeHours.length ; i++){ //each time for as many times as there are hours listed in the hors open array
//       this.setCustosPerHr(); // set the number of custos that hour
//       salesthathour = this.custosPerHr * this.avgPurchaseSize; // calculate sales for that hour
//       this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies'; //round up so we charge full price for factions of cookies
//       this.dailyTotal += salesthathour;
//     }
//     this.dailyTotal = Math.ceil(this.dailyTotal); //round up because we dont sell fractions of cookies
//     this.salesRecord.push('Total: ' + this.dailyTotal); //add the daily total to the end of the  sales data array
//
//     console.log('sales record for ' + this.name + ' looks like this now: ' + this.salesRecord);
//     console.log('dailyCookiesCount: ' + this.dailyTotal );
//
//
//   },
//
//   listSalesData: function (){
//     this.populateSalesData();
//     var contentArea = document.getElementById('content_area');
//     var listTitle = document.createElement('p');
//     var salesDataList = document.createElement('ul');
//     var salesData;
//
//     listTitle.textContent = this.salesRecord[0]; // puts the firat element in the array, in this case the store naame in a *p tag to use as a header
//     contentArea.appendChild(listTitle);
//
//     for( var i = 1; i < this.salesRecord.length; i++){
//       salesData = document.createElement('li');
//       salesData.textContent = this.salesRecord[i];
//       salesDataList.appendChild(salesData);
//     };
//
//     contentArea.appendChild(salesDataList);
//   }
//
// };

// var seaTac  = {
//   name : 'SeaTac Airport ',
//   minHourlyCustos : 3,
//   maxHourlyCustos: 24,
//   avgPurchaseSize : 1.2,
//   dailyTotal: 0,
//   hours: 15,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
//   setHoursOpen: function () {
//     this.hours = this.storeHours.length;
//   },
//   salesRecord: [],
//
//   setCustosPerHr: function () {
//     var custoEstimate;
//     var min = Math.ceil(this.minHourlyCustos);
//     var max = Math.floor(this.maxHourlyCustos);
//     custoEstimate = Math.floor(Math.random() * (max - min)) + min;
//     this.custosPerHr = custoEstimate ;
//   },
//
//   populateSalesData : function () {
//     var salesthathour;
//     this.salesRecord = []; //blanks it out
//     this.dailyTotal = 0;
//     this.salesRecord.push(this.name); // put name as first element in sales data array
//     for (var i = 1 ; i < this.storeHours.length ; i++){ //each time for as many times as there are hours listed in the hors open array
//       this.setCustosPerHr(); // set the number of custos that hour
//       salesthathour = this.custosPerHr * this.avgPurchaseSize; // calculate sales for that hour
//       this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies'; //round up so we charge full price for factions of cookies
//       this.dailyTotal += salesthathour;
//     }
//     this.dailyTotal = Math.ceil(this.dailyTotal); //round up because we dont sell fractions of cookies
//
//     this.salesRecord.push('Total: ' + this.dailyTotal); //add the daily total to the end of the  sales data array
//   },
//
//   listSalesData: function (){
//     this.populateSalesData();
//     var contentArea = document.getElementById('content_area');
//     var listTitle = document.createElement('p');
//     var salesDataList = document.createElement('ul');
//     var salesData;
//     listTitle.textContent = this.salesRecord[0]; // puts the firat element in the array, in this case the store naame in a *p tag to use as a header
//     contentArea.appendChild(listTitle);
//
//     for( var i = 1; i < this.salesRecord.length; i++){
//       salesData = document.createElement('li');
//       salesData.textContent = this.salesRecord[i];
//       salesDataList.appendChild(salesData);
//     };
//     contentArea.appendChild(salesDataList);
//   }
// };
//
// var seattleCenter  = {
//   name : 'Seattle Center ',
//   minHourlyCustos : 11,
//   maxHourlyCustos: 38,
//   avgPurchaseSize : 3.7,
//   dailyTotal: 0,
//   hours: 15,
//   storeHours: ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm' ] ,
//   setHoursOpen: function () {
//     this.hours = this.storeHours.length;},
//   salesRecord: [],
//
//   setCustosPerHr: function () {
//     var custoEstimate;
//     var min = Math.ceil(this.minHourlyCustos);
//     var max = Math.floor(this.maxHourlyCustos);
//     custoEstimate = Math.floor(Math.random() * (max - min)) + min;
//     this.custosPerHr = custoEstimate ; },
//
//   populateSalesData : function () {
//     var salesthathour;
//     this.salesRecord = [] ;
//     this.dailyTotal = 0;
//     this.salesRecord.push(this.name);
//     for (var i = 1 ; i < this.storeHours.length ; i++){
//       this.setCustosPerHr () ;
//       salesthathour = this.custosPerHr * this.avgPurchaseSize ;
//       this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies'; //round up so we charge full price for factions of cookies
//       this.dailyTotal += salesthathour;
//     }
//
//     this.dailyTotal = Math.ceil(this.dailyTotal); //round up because we dont sell fractions of cookies
//     this.salesRecord.push('Total: ' + this.dailyTotal); //add the daily total to the end of the  sales data array
//   },
//
//
//   listSalesData: function (){
//     this.populateSalesData();
//     var contentArea = document.getElementById('content_area');
//     var listTitle = document.createElement('p');
//     var salesDataList = document.createElement('ul');
//     var salesData;
//     listTitle.textContent = this.salesRecord[0]; // puts the firat element in the array, in this case the store naame in a *p tag to use as a header
//     contentArea.appendChild(listTitle);
//
//     for( var i = 1; i < this.salesRecord.length; i++){
//       salesData = document.createElement('li');
//       salesData.textContent = this.salesRecord[i];
//       salesDataList.appendChild(salesData);
//     };
//     contentArea.appendChild(salesDataList);
//   },
//
//
// };
//
// var capHill  = {
//   name : 'Capitol Hill' ,
//   minHourlyCustos : 20 ,
//   maxHourlyCustos: 38 ,
//   avgPurchaseSize : 2.3 ,
//   dailyTotal: 0 ,
//   hours: 15 ,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
//   setHoursOpen : function () {
//     this.hours = this.storeHours.length;
//   },
//   salesRecord: [],
//
//   setCustosPerHr: function () {
//     var custoEstimate;
//     var min = Math.ceil(this.minHourlyCustos);
//     var max = Math.floor(this.maxHourlyCustos);
//     custoEstimate = Math.floor(Math.random() * (max - min)) + min;
//
//     this.custosPerHr = custoEstimate ;
//   },
//
//   populateSalesData : function () {
//     var salesthathour;
//     this.salesRecord = [];
//     this.dailyTotal = 0;
//     this.salesRecord.push(this.name) ;
//     for (var i = 1 ; i < this.storeHours.length ; i++){
//       this.setCustosPerHr();
//       salesthathour = this.custosPerHr * this.avgPurchaseSize;
//       this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies';
//       this.dailyTotal += salesthathour ;
//     }
//     this.dailyTotal = Math.ceil(this.dailyTotal);
//
//     this.salesRecord.push('Total: ' + this.dailyTotal);
//   },
//
//
//   listSalesData: function (){
//     this.populateSalesData();
//
//     var contentArea = document.getElementById('content_area');
//     var listTitle = document.createElement('p');
//     var salesDataList = document.createElement('ul');
//     var salesData;
//     listTitle.textContent = this.salesRecord[0];
//     contentArea.appendChild(listTitle);
//
//     for( var i = 1; i < this.salesRecord.length; i++){
//       salesData = document.createElement('li');
//       salesData.textContent = this.salesRecord[i];
//       salesDataList.appendChild(salesData);
//     };
//     contentArea.appendChild(salesDataList);
//   }
// };
//
// var alki = {
//   name : 'Alki',
//   minHourlyCustos : 2,
//   maxHourlyCustos: 16,
//   avgPurchaseSize : 4.6,
//   dailyTotal: 0,
//   hours: 15,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
//   setHoursOpen: function () {
//     this.hours = this.storeHours.length;
//   },
//   salesRecord: [],
//
//   setCustosPerHr: function () {
//     var custoEstimate;
//     var min = Math.ceil(this.minHourlyCustos);
//     var max = Math.floor(this.maxHourlyCustos);
//     custoEstimate = Math.floor(Math.random() * (max - min)) + min;
//     this.custosPerHr = custoEstimate ;
//   },
//
//   populateSalesData : function () {
//     var salesthathour;
//     this.salesRecord = [];
//     this.dailyTotal = 0;
//     this.salesRecord.push(this.name);
//     for (var i = 1 ; i < this.storeHours.length ; i++){
//       this.setCustosPerHr();
//       salesthathour = this.custosPerHr * this.avgPurchaseSize;
//       this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies';
//       this.dailyTotal += salesthathour;
//     }
//     this.dailyTotal = Math.ceil(this.dailyTotal);
//     this.salesRecord.push('Total: ' + this.dailyTotal + ' cookies');
//   },
//
//   listSalesData: function (){
//     this.populateSalesData();
//     var contentArea = document.getElementById('content_area');
//     var listTitle = document.createElement('p');
//     var salesDataList = document.createElement('ul');
//     var salesData;
//     listTitle.textContent = this.salesRecord[0];
//     contentArea.appendChild(listTitle);
//     for( var i = 1; i < this.salesRecord.length; i++){
//       salesData = document.createElement('li');
//       salesData.textContent = this.salesRecord[i];
//       salesDataList.appendChild(salesData);
//     };
//
//     contentArea.appendChild(salesDataList);
//   },
//
// };
// pike.listSalesData();
// seaTac.listSalesData();
// seattleCenter.listSalesData();
// capHill.listSalesData();
// alki.listSalesData();
