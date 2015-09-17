angular.module('MyFirst', [
  'ngRoute',
  'mobile-angular-ui',
  'MyFirst.controllers.Main',
  'MyFirst.controllers.invoice',
  'MyFirst.controllers.book_details',
  'MyFirst.controllers.film_details',
  'MyFirst.controllers.BookList',
  'MyFirst.controllers.FilmList',
  'MyFirst.controllers.FilmSearchCrtl',  
  'MyFirst.controllers.httpTest',
  'MyFirst.services.FilmDataService'
])

.config(function($routeProvider) {
  $routeProvider.when('/', 			{templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/invoice', 	{templateUrl: 'invoice.html', reloadOnSearch: false}); 
  $routeProvider.when('/book', 	{templateUrl: 'book_details.html', reloadOnSearch: false}); 
  $routeProvider.when('/liste', 	{templateUrl: 'book_list.html', reloadOnSearch: false}); 
  $routeProvider.when('/filme', 	{templateUrl: 'film_list.html', reloadOnSearch: false}); 
  $routeProvider.when('/film/:id', {templateUrl: 'film_details.html', controller:'film_details', reloadOnSearch: false}); 
  $routeProvider.when('/film', {templateUrl: 'film_details.html', reloadOnSearch: false}); 
  $routeProvider.when('/suche', {templateUrl: 'film_suche.html', reloadOnSearch: false}); 
  $routeProvider.when('/http',   {templateUrl: 'http_test.html', reloadOnSearch: false}); 
  $routeProvider.otherwise({redirectTo: '/'});
  
});