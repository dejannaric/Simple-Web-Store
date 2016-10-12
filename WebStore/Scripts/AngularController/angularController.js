var AngularModule = angular.module("App", ['angularUtils.directives.dirPagination']);

AngularModule.controller("AppController", function ($scope, $http, ApiCall) {
    
    $scope.CategoriesList = [];
    $scope.myFilter = {};
    $scope.add = true;
    $scope.update = false;
    $scope.addNew = false;
    $scope.ProductsList = null;


    ApiCall.GetCall("Categories", "GetCategories").then(function (d) {
        $scope.CategoriesList = d;
    })    

    
     ApiCall.GetCall("Products", "GetProducts").then(function (d) {
        $scope.ProductsList = d;
         

        for (i = 0; i < $scope.ProductsList.length; i++) {
            for (j = 0; j < $scope.CategoriesList.length; j++) {
                if ($scope.ProductsList[i].CategoryId == $scope.CategoriesList[j].Id) {
                    $scope.ProductsList[i].CategoryName = $scope.CategoriesList[j].Name;
                }
            }
        }
         
     });

     $scope.Product = {         
         Name: '',
         Price: '',
         Description: '',
         CategoryId: ''
     };

     $scope.clear = function () {         
         $scope.Product.Name = '';
         $scope.Product.Price = '';
         $scope.Product.Description = '';
         $scope.Product.CategoryId = '';
     }

     $scope.save = function () {
         if ($scope.Product.Name != "" && $scope.Product.Price != "" && $scope.Product.Description != "" && $scope.Product.CategoryId != "") {
             ApiCall.AddCall("Products", "PostProduct", $scope.Product).then(function (data) {
                 $scope.ProductsList.push(data);
                 $scope.clear();
                 alert("Product aded!");
                 
             });
         }
     }

     $scope.delete = function (prod) {
         ApiCall.DeleteCall("Products", "DeleteProduct", prod.Id).then(function (data) {
             var index = $scope.ProductsList.indexOf(prod)
             $scope.ProductsList.splice(index, 1);
             alert("Product deleted!");
         })
     }

     $scope.edit = function (prod) {
         $scope.update = true;
         $scope.add = false;
         $scope.Product.Id = prod.Id;
         $scope.Product.Name = prod.Name;
         $scope.Product.Description = prod.Description;
         $scope.Product.Price= prod.Price;
         $scope.Product.CategoryId = prod.CategoryId;      

     }

     $scope.saveUpdate = function () {
         ApiCall.PutCall("Products", "PutProduct", $scope.Product.Id, $scope.Product).then(function (data) {
             alert("Product updated!");
         })
     }

     
     


    


});





