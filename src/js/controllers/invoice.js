angular.module('MyFirst.controllers.invoice', [])
.controller('InvoiceController', function($scope) {
  $scope.topTitle = "Invoice";
  $scope.fileCount = 88;
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'CNY'];
  this.usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    CNY: 6.09
  };

  this.total = function total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {

    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };
  this.pay = function pay() {
    window.alert("Thanks!");
  };

 $scope.setFiles = function(element) {
    $scope.$apply(function($scope) {
      console.log('files:', element.files);
      // Turn the FileList object into an Array
        $scope.files = [];
        for (var i = 0; i < element.files.length; i++) {
          $scope.files.push(element.files[i]);
        };
      $scope.progressVisible = false;
      $scope.fileCount =$scope.files.length;
      var namesArr = [];
      for(i=0;i<$scope.files.length;i++){
          namesArr.push($scope.files[i].name)
      };
      $scope.fileListe = namesArr.join(' ,');
    });
 };
});
