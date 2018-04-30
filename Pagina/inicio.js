var app = angular.module('myapp3', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/CrearGrupo', {
    templateUrl : 'CrearGrupo.html'
  })

  .when('/aaa', {
    templateUrl : 'index2.html'
  })

  .when('/UnirseGrupo', {
    templateUrl : 'paginas/UnirseGrupo.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});




