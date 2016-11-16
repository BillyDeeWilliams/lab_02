'use strict';
//lets make our objects!!!
var pike  = {
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

  setCustosPerHr: function () { //in case we ever want to change how we estimate customers or want to run more controlled simulations to generate predictions
    var custoEstimate;
    var min = Math.ceil(this.minHourlyCustos);
    var max = Math.floor(this.maxHourlyCustos);
    custoEstimate = Math.floor(Math.random() * (max - min)) + min;
    this.custosPerHr = custoEstimate ; //generates a random number of customers within the store varrienc
  },

  populateSalesData : function () {
    var salesthathour;
    var hoursOpen = this.storeHours; // double check
    this.salesRecord = []; //blanks it out
    this.dailyTotal = 0;
    this.salesRecord.push(this.name); // put name as first element in sales data array
    for (var i = 1 ; i < hoursOpen.length ; i++){ //each time for as many times as there are hours listed in the hors open array
      this.setCustosPerHr(); // set the number of custos that hour
      salesthathour = this.custosPerHr * this.avgPurchaseSize; // calculate sales for that hour
      this.salesRecord[i] = ' ' + hoursOpen[i - 1] + ': ' + Math.ceil(salesthathour) + ' cookies'; //round up so we charge full price for factions of cookies
      this.dailyTotal += salesthathour;
    }
    this.dailyTotal = Math.ceil(this.dailyTotal); //round up because we dont sell fractions of cookies
    this.salesRecord.push('Total: ' + this.dailyTotal); //add the daily total to the end of the  sales data array

    console.log('sales record for ' + this.name + ' looks like this now: ' + this.salesRecord);
    console.log('dailyCookiesCount: ' + this.dailyTotal );


  },
  listHours: function() {
    var contentArea = document.getElementById('content_area');
    var list = document.createElement('ul'); //crea1te a node for and unorderlist containing the tag for ul and a variable that refers to that node named ul
    var listItem; //names a variable li
    var listHeader;
    listHeader = document.createElement('li'); //listheader gets a new list item node
    listHeader.textContent = this.salesRecord[0]; //takes fist element which should be the name and puts is in the a variable called listheader
    list.appendChild(listHeader);  //appends listheader inside on list
  //for as many times as there are items in the list of hours open do this:
    for (var i = 1; i < this.salesRecord.length; i++) {
      listItem = document.createElement('li');
        //create a node with content content of an <li> element and point the var listItem at it
        //set whatever listItem is pointing at with the content from the corrsponding element in the array salesData that belongs this this object
      listItem.textContent = this.salesRecord[i];
      list.appendChild(listItem); //append the node we are callling list with a new child element within it that is what the variable we call listItem is pointing at
    }
    contentArea.appendChild(list); //append the node that the varriable we call content area is pointing to, in this case the element with the id area content as sel on line 30
  },

  listSalesData: function (){
    this.populateSalesData();
    var contentArea = document.getElementById('content_area');
    var salesDataList = document.createElement('ul');
    var salesData;

    for( var i = 0; i < this.salesRecord.length; i++){
      salesData = document.createElement('li');
      salesData.textContent = this.salesRecord[i];
      salesDataList.appendChild(salesData);
    };

    contentArea.appendChild(salesDataList);
  }

};
