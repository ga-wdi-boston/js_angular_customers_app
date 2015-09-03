(function customersAppIIFE(){
  var app = angular.module('customersApp', ['ngRoute', 'ngMessages']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'customersController as custCtrl',
              templateUrl: 'app/views/customers.html'
            }
           )
      .when('/orders/:customerId',
            {
              controller: 'ordersController',
              controllerAs: 'ordersCtrl',
              templateUrl: 'app/views/orders.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();
