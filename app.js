'use strict';
//lets make our objects!!!
var firstAndPike  = {
  name : '1st and Pike',
  minHourlyCustos : 1,
  maxHourlyCustos: 10,
  avgPurchaseSize : 6.3,
  dailyTotal: 0,
  hours: 15,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  setHoursOpen: function () {
    this.hours = this.storeHours.length;
  },
  salesRecord: [],

  getRandom: function () { //generate a dandom number within the store varrience
    var min = Math.ceil(this.minHourlyCustos);
    var max = Math.floor(this.maxHourlyCustos);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  setCustosPerHr: function () {
    var x;
    x = this.getRandom();
    this.custosPerHr = x ; //generates a random number of customers within the store varrienc and stores in the objects key for that value
  },

  populateSalesData : function () {
    var salesthathour;
    var dailyCookiesCount = this.dailyTotal; // init sum var
    var hoursOpen = this.hours; // double check
    for (var i = 0 ; i < hoursOpen ; i++){ //each time for as many times as there are hours listed in the hors open array
      this.setCustosPerHr(); // set the number of custos that hour
      salesthathour = this.custosPerHr * this.avgPurchaseSize; // calculate sales for that hour
      this.salesRecord[i] = salesthathour;
    }
    console.log('sales record for ' + this.name + ' looks like this now: ' + this.salesRecord);
    //sales data populated and ready to be summed
    for (var k = 0 ; k < this.salesRecord; k++ ){
      dailyCookiesCount += this.salesRecord[k];

    }
    console.log('dailyCookiesCount: ' + dailyCookiesCount );

  },
  listHours: function() {
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul'); //crea1te a node for and unorderlist containing the tag for ul and a variable that refers to that node named ul
    var li; //names a variable li

  //for as many times as there are items in the list of hours open do this:
    for (var i = 0; i < this.storeHours.length; i++) {
      li = document.createElement('li');
        //create a node with content content of an <li> element and point the var li at it
        //set whatever li is pointing at with the content from the corrsponding element in the array storehours that belongs this this object
      li.textContent = this.storeHours[i];
      ul.appendChild(li); //append the node we are callling ul with a new child element within it that is what the variable we call li is pointing at
    }
    contentArea.appendChild(ul); //append the node that the varriable we call content area is pointing to, in this case the element with the id area content as sel on line 30
  },

  listSalesData: function (){
    this.populateSalesData();
    var contentArea = document.getElementById('content_area');
    var salesDataList = document.createElement('ul');
    var salesData;

    for( var i = 0; i < this.storeHours.length; i++){
      salesData = document.createElement('li');
      salesData.textContent = this.salesRecord[i];
      salesDataList.appendChild(salesData);
    };

    contentArea.appendChild(salesDataList);
  }

};
