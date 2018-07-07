// Creation of Module
var app = angular.module('GroceryApp',[]);

// Creation of Controller
app.controller('GroceryAppCtrl',function() {
    this.item = '';
    this.groceryList = [];
    this.editMode = false;
    this.addItem = function(item) {
       if(this.item === ''){
           alert('Man! Add an item first..!')
       }
       else{
           if(!(this.groceryList.indexOf(item) === -1)){
               alert("Hey!! The " + item + " Exists Already");
               this.item = '';
           }
           else{
               this.groceryList.push(item);
               this.item = '';
           }
       }
    };
    this.enableEditMode = function() {
        this.editMode = true;
    };
    this.disableEditMode = function() {
        this.editMode = false;
    };
    this.deleteItem = function(index) {
        this.groceryList.splice(index,1);
    };

});
