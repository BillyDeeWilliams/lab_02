'use strict';
// Lets make a Constructor robot for them there objects
function SalmonStore (name, min, max, avgSale) {
  this.name = name;
  this.minHourlyCustos = min;
  this.maxHourlyCustos = max;
  this.avgPurchaseSize = avgSale;
  this.dailyTotal = 0;
  this.hours = 15;
  this.storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

}

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
  for ( var i = 0 ; i < this.storeHours.length; i ++){
    this.setCustosPerHr();
    salesthathour = this.custosPerHr * this.avgPurchaseSize;
    this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies';
    this.dailyTotal += salesthathour;
  };
  this.dailyTotal = Math.ceil(this.dailyTotal);
  this.salesRecord.push('Total: ' + this.dailyTotal);
};

var pike  = {
  name : '1st and Pike',
  minHourlyCustos : 23,
  maxHourlyCustos: 65,
  avgPurchaseSize : 6.3,
  dailyTotal: 0,
  hours: 15,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  setHoursOpen: function () {
    this.hours = this.storeHours.length;
  },
  salesRecord: [],

  setCustosPerHr: function () {
    var custoEstimate;
    var min = Math.ceil(this.minHourlyCustos);
    var max = Math.floor(this.maxHourlyCustos);
    custoEstimate = Math.floor(Math.random() * (max - min)) + min;
    this.custosPerHr = custoEstimate ;
  },

  populateSalesData : function () {
    var salesthathour;
    this.salesRecord = []; //blanks it out
    this.dailyTotal = 0;
    this.salesRecord.push(this.name); // put name as first element in sales data array
    for (var i = 1 ; i < this.storeHours.length ; i++){ //each time for as many times as there are hours listed in the hors open array
      this.setCustosPerHr(); // set the number of custos that hour
      salesthathour = this.custosPerHr * this.avgPurchaseSize; // calculate sales for that hour
      this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies'; //round up so we charge full price for factions of cookies
      this.dailyTotal += salesthathour;
    }
    this.dailyTotal = Math.ceil(this.dailyTotal); //round up because we dont sell fractions of cookies
    this.salesRecord.push('Total: ' + this.dailyTotal); //add the daily total to the end of the  sales data array

    console.log('sales record for ' + this.name + ' looks like this now: ' + this.salesRecord);
    console.log('dailyCookiesCount: ' + this.dailyTotal );


  },

  listSalesData: function (){
    this.populateSalesData();
    var contentArea = document.getElementById('content_area');
    var listTitle = document.createElement('p');
    var salesDataList = document.createElement('ul');
    var salesData;

    listTitle.textContent = this.salesRecord[0]; // puts the firat element in the array, in this case the store naame in a *p tag to use as a header
    contentArea.appendChild(listTitle);

    for( var i = 1; i < this.salesRecord.length; i++){
      salesData = document.createElement('li');
      salesData.textContent = this.salesRecord[i];
      salesDataList.appendChild(salesData);
    };

    contentArea.appendChild(salesDataList);
  }

};

var seaTac  = {
  name : 'SeaTac Airport ',
  minHourlyCustos : 3,
  maxHourlyCustos: 24,
  avgPurchaseSize : 1.2,
  dailyTotal: 0,
  hours: 15,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  setHoursOpen: function () {
    this.hours = this.storeHours.length;
  },
  salesRecord: [],

  setCustosPerHr: function () {
    var custoEstimate;
    var min = Math.ceil(this.minHourlyCustos);
    var max = Math.floor(this.maxHourlyCustos);
    custoEstimate = Math.floor(Math.random() * (max - min)) + min;
    this.custosPerHr = custoEstimate ;
  },

  populateSalesData : function () {
    var salesthathour;
    this.salesRecord = []; //blanks it out
    this.dailyTotal = 0;
    this.salesRecord.push(this.name); // put name as first element in sales data array
    for (var i = 1 ; i < this.storeHours.length ; i++){ //each time for as many times as there are hours listed in the hors open array
      this.setCustosPerHr(); // set the number of custos that hour
      salesthathour = this.custosPerHr * this.avgPurchaseSize; // calculate sales for that hour
      this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies'; //round up so we charge full price for factions of cookies
      this.dailyTotal += salesthathour;
    }
    this.dailyTotal = Math.ceil(this.dailyTotal); //round up because we dont sell fractions of cookies

    this.salesRecord.push('Total: ' + this.dailyTotal); //add the daily total to the end of the  sales data array
  },

  listSalesData: function (){
    this.populateSalesData();
    var contentArea = document.getElementById('content_area');
    var listTitle = document.createElement('p');
    var salesDataList = document.createElement('ul');
    var salesData;
    listTitle.textContent = this.salesRecord[0]; // puts the firat element in the array, in this case the store naame in a *p tag to use as a header
    contentArea.appendChild(listTitle);

    for( var i = 1; i < this.salesRecord.length; i++){
      salesData = document.createElement('li');
      salesData.textContent = this.salesRecord[i];
      salesDataList.appendChild(salesData);
    };
    contentArea.appendChild(salesDataList);
  }
};

var seattleCenter  = {
  name : 'Seattle Center ',
  minHourlyCustos : 11,
  maxHourlyCustos: 38,
  avgPurchaseSize : 3.7,
  dailyTotal: 0,
  hours: 15,
  storeHours: ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm' ] ,
  setHoursOpen: function () {
    this.hours = this.storeHours.length;},
  salesRecord: [],

  setCustosPerHr: function () {
    var custoEstimate;
    var min = Math.ceil(this.minHourlyCustos);
    var max = Math.floor(this.maxHourlyCustos);
    custoEstimate = Math.floor(Math.random() * (max - min)) + min;
    this.custosPerHr = custoEstimate ; },

  populateSalesData : function () {
    var salesthathour;
    this.salesRecord = [] ;
    this.dailyTotal = 0;
    this.salesRecord.push(this.name);
    for (var i = 1 ; i < this.storeHours.length ; i++){
      this.setCustosPerHr () ;
      salesthathour = this.custosPerHr * this.avgPurchaseSize ;
      this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies'; //round up so we charge full price for factions of cookies
      this.dailyTotal += salesthathour;
    }

    this.dailyTotal = Math.ceil(this.dailyTotal); //round up because we dont sell fractions of cookies
    this.salesRecord.push('Total: ' + this.dailyTotal); //add the daily total to the end of the  sales data array
  },


  listSalesData: function (){
    this.populateSalesData();
    var contentArea = document.getElementById('content_area');
    var listTitle = document.createElement('p');
    var salesDataList = document.createElement('ul');
    var salesData;
    listTitle.textContent = this.salesRecord[0]; // puts the firat element in the array, in this case the store naame in a *p tag to use as a header
    contentArea.appendChild(listTitle);

    for( var i = 1; i < this.salesRecord.length; i++){
      salesData = document.createElement('li');
      salesData.textContent = this.salesRecord[i];
      salesDataList.appendChild(salesData);
    };
    contentArea.appendChild(salesDataList);
  },


};

var capHill  = {
  name : 'Capitol Hill' ,
  minHourlyCustos : 20 ,
  maxHourlyCustos: 38 ,
  avgPurchaseSize : 2.3 ,
  dailyTotal: 0 ,
  hours: 15 ,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  setHoursOpen : function () {
    this.hours = this.storeHours.length;
  },
  salesRecord: [],

  setCustosPerHr: function () {
    var custoEstimate;
    var min = Math.ceil(this.minHourlyCustos);
    var max = Math.floor(this.maxHourlyCustos);
    custoEstimate = Math.floor(Math.random() * (max - min)) + min;

    this.custosPerHr = custoEstimate ;
  },

  populateSalesData : function () {
    var salesthathour;
    this.salesRecord = [];
    this.dailyTotal = 0;
    this.salesRecord.push(this.name) ;
    for (var i = 1 ; i < this.storeHours.length ; i++){
      this.setCustosPerHr();
      salesthathour = this.custosPerHr * this.avgPurchaseSize;
      this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies';
      this.dailyTotal += salesthathour ;
    }
    this.dailyTotal = Math.ceil(this.dailyTotal);

    this.salesRecord.push('Total: ' + this.dailyTotal);
  },


  listSalesData: function (){
    this.populateSalesData();

    var contentArea = document.getElementById('content_area');
    var listTitle = document.createElement('p');
    var salesDataList = document.createElement('ul');
    var salesData;
    listTitle.textContent = this.salesRecord[0];
    contentArea.appendChild(listTitle);

    for( var i = 1; i < this.salesRecord.length; i++){
      salesData = document.createElement('li');
      salesData.textContent = this.salesRecord[i];
      salesDataList.appendChild(salesData);
    };
    contentArea.appendChild(salesDataList);
  }
};

var alki = {
  name : 'Alki',
  minHourlyCustos : 2,
  maxHourlyCustos: 16,
  avgPurchaseSize : 4.6,
  dailyTotal: 0,
  hours: 15,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  setHoursOpen: function () {
    this.hours = this.storeHours.length;
  },
  salesRecord: [],

  setCustosPerHr: function () {
    var custoEstimate;
    var min = Math.ceil(this.minHourlyCustos);
    var max = Math.floor(this.maxHourlyCustos);
    custoEstimate = Math.floor(Math.random() * (max - min)) + min;
    this.custosPerHr = custoEstimate ;
  },

  populateSalesData : function () {
    var salesthathour;
    this.salesRecord = [];
    this.dailyTotal = 0;
    this.salesRecord.push(this.name);
    for (var i = 1 ; i < this.storeHours.length ; i++){
      this.setCustosPerHr();
      salesthathour = this.custosPerHr * this.avgPurchaseSize;
      this.salesRecord[i] = ' ' + this.storeHours[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies';
      this.dailyTotal += salesthathour;
    }
    this.dailyTotal = Math.ceil(this.dailyTotal);
    this.salesRecord.push('Total: ' + this.dailyTotal);
  },

  listSalesData: function (){
    this.populateSalesData();
    var contentArea = document.getElementById('content_area');
    var listTitle = document.createElement('p');
    var salesDataList = document.createElement('ul');
    var salesData;
    listTitle.textContent = this.salesRecord[0];
    contentArea.appendChild(listTitle);
    for( var i = 1; i < this.salesRecord.length; i++){
      salesData = document.createElement('li');
      salesData.textContent = this.salesRecord[i];
      salesDataList.appendChild(salesData);
    };

    contentArea.appendChild(salesDataList);
  },

};
