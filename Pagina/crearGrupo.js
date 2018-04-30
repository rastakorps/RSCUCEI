 var app = angular.module("AppCrearGrupos",[]);
 app.controller("Crear",function($scope, $http){  
      $scope.crearGrupo = function(){  
           $http.post(  
                "./PHP/crearGrupos.php",  
                {'nombre':$scope.nombre, 'fecha':$scope.fecha, 'hora':$scope.hora, 'lugar':$scope.lugar, 'descripcion':$scope.descripcion,'fk':$scope.fk}  
           ).success(function(data){

                if(data.trim() === 'correcto'){  
               $scope.nombre = null;
                $scope.fecha = null;  
                $scope.hora = null;
                $scope.lugar = null;
                //$scope.descripcion = null;
                //$scope.fk= null;
                alert("Grupo Creado");
                  
                  }
           });  
      }  
 });  
