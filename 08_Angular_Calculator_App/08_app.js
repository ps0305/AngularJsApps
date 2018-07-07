// Creation of Angular Module
var app = angular.module('calcApp', []);

// Creation of Controller
app.controller('calcAppCtrl', function() {
  this.operator = '+';
  this.result = 'RESULT';
  this.firstNumber = '';
  this.secondNumber = '';
  this.changeOperator = function(opr) {
    this.operator = opr;
  };
  this.calculate = function() {
    switch (this.operator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '/':
        this.result = this.firstNumber / this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      default:
        this.result = 'RESULT';
        break;
    }
  };
  this.clearAll = function() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.operator = '+';
    this.result = 'RESULT';
  };
});
