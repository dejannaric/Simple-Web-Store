AngularModule.service("ApiCall", ["$http", function ($http) {
    var rezultat;

    // GET all
    this.GetCall = function (controllerName, methodName) {
        rezultat = $http.get("api/" + controllerName + "/" + methodName).then(
           function (response) {
               // success
               return response.data;
           },
           function (response) {
               // error
               return response.statusText;
           }
        );
        return rezultat;
    }

    // GET by ID
    this.GetCallId = function (controllerName, methodName, Id) {
        rezultat = $http.get("api/" + controllerName + "/" + methodName+"/"+Id).then(
           function (response) {
               // success
               return response.data;
           },
           function (response) {
               // error
               return response.statusText;
           }
        );
        return rezultat;
    }


    //Delete
    this.DeleteCall = function (controllerName, methodName, Id) {
        rezultat = $http.delete('api/' + controllerName + '/' + methodName +"/"+Id).then(
           function (response) {
               // success
               return response.data;
           },
           function (response) {
               // error
               return response.statusText;
           }
        );
        return rezultat;
    }

    //Add
    this.AddCall = function (controllerName, methodName, obj) {
        rezultat = $http.post('api/' + controllerName + '/' + methodName +"/", obj).then(
           function (response) {
               // success
               return response.data;
           },
           function (response) {
               // error
               return response.statusText;
           }
        );
        return rezultat;
    }

    //Edit
    this.PutCall = function (controllerName, methodName, id, obj) {
        rezultat = $http.put('api/' + controllerName + '/' + methodName + "/" + id, obj).then(
           function (response) {
               // success
               return response.data;
           },
           function (response) {
               // error

               return response.statusText;
           }
        );
        return rezultat;
    }

       

}])