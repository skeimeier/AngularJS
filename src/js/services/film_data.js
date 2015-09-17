"use strict"

angular.module('MyFirst.services.FilmDataService', [])

.factory('FilmDataService',['$http',function($http) {
    var srv = {};

    // Service implementation
    srv.getFilmData = function(id) {
     /**/
     return $http({method: 'GET', url: 'http://api.themoviedb.org/3/movie/'+id+'?&api_key=d95d1f942d3f7bb15d036eb9e13b0182&language=de&append_to_response=casts&0.9673378384680049'});
       /*
        then(function(response) {
           
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {
          
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
      return $scope.data;
    */
       
    };

    srv.findFilmName = function(name) {
        // Copy the array in order not to expose internal data structures
        return $http({method: 'GET', url: 'http://api.themoviedb.org/3/search/movie?&api_key=d95d1f942d3f7bb15d036eb9e13b0182&language=de&query='+name+'&0.9673378384680049'});

    };

    // Public API
    return {
       // getFilmData: function(id) {
       //     return srv.getFilmData(id) || "hallo "+id;
       // },
        getFilmData:  srv.getFilmData,
        findFilmName: srv.findFilmName


    };
}]);