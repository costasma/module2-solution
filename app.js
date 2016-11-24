(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
var itemIncluded = this;

itemIncluded.arrItems= ShoppingListCheckOffService.getItems();

itemIncluded.addItem=function(itemName,quantity,itemIndex){


//try{
  ShoppingListCheckOffService.addItem(itemName,quantity,itemIndex);
//}catch(error){
  //itemIncluded.errormessage=error.message;
//}
itemIncluded.arraylength=ShoppingListCheckOffService.getItemslength();

 };


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var itembought = this;

  itembought.items=  ShoppingListCheckOffService.getboughtItems();





}

function ShoppingListCheckOffService() {
  var service = this;

 var arrItems=[

    {
     name: "Butter",
     quantity: "2"
    },
    {
     name: "Cheese",
     quantity: "4"
    },
    {
     name: "wine",
     quantity: "4"
    },
    {
      name: "cabbage",
      quantity: "1"
    },
    {
      name: "beef",
      quantity: "2"
    }
   ];

  var items = [];

  service.addItem = function (itemName,quantity,itemIndex) {

    var item = {
        name: itemName,
        quantity: quantity
      };

//var filteredarrItems.filter(function(getelementbyid);



    arrItems.splice(itemIndex, 1);

    items.push(item);
  //  if (arrItems.length=1){
  //     throw new Error("Everything is bought");
  //  }



  };

  service.getItemslength = function () {
  var flag=true
  if (arrItems.length>0){
  flag=false

}

    return flag;
  };

  service.getItems = function () {
    return arrItems;
  };

  service.getboughtItems = function () {
    return items;
  };




}


})();
