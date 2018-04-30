var app = angular.module('myapp3', ['ngRoute']);

app.factory('recuperar', function() {
  return {mensaje: '',
          codigo:'' }
});

app.config(function($routeProvider) {
  $routeProvider
  
  .when('/inicio', {
    templateUrl : 'slider.html'
  })  

  .when('/crearGrupo', {
    templateUrl : 'CrearGrupo.html',
    controller:'Crear'
  })

  .when('/entrar', {
    templateUrl : 'Login.html',
    controller:'postController'
  })

 .when('/unirse', {
    templateUrl : 'Unirse.html',
    controller:'unir'
  })  

 .when('/correoUdg', {
   templateUrl : 'correoUdg.html',
   controller:'validarController'
  })  

 .when('/Registro', {
   templateUrl : 'crearUsuario.html',
   controller:'createController'
  })   
  .otherwise({redirectTo: '/'});
});



 app.controller('postController', ['$scope', '$http', '$location','recuperar',function($scope, $http, $location,recuperar) { 
                
                $scope.postForm = function() {
                var encodedString = 'correo=' +$scope.correo + '&password=' +$scope.password;
 
                $http({
                    method: 'POST',
                    url: 'PHP/autentificacion.php',
                    data: encodedString,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                
                .success(function(data) {
                        if ( data.trim() === 'correct') {
                              document.getElementById('header').style.display = 'none';
                              document.getElementById('header2').style.display = 'block';
                            var aux="";
                            $http({
                                 method: 'POST',
                                 url: 'PHP/php.php',
                                 data: encodedString,
                                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                                }).then(function (response) {var str = JSON.stringify (response.data);
                           
                            
                            var ob = JSON.parse(str, (key, value) => {
                            if (key === 'Name') {
                                recuperar.mensaje=value;
                                }
                            else if(key === 'FK'){
                                
                                recuperar.codigo=value;
                                
                                }    
                                });
                                 
                           });
                          
                                $location.path("/Inicio");

                        } else {
                            alert("El correo ingresado no está registrado");
                        }
                }) 
            }
    }]);

app.controller("inicioController",['$scope','recuperar', function($scope, recuperar) {
  $scope.datos = recuperar;
}]);


 app.controller("Crear",function($scope, $http, recuperar){  
        
      $scope.crearGrupo = function(){ 

     	$http.post("PHP/crearGrupo.php", { 
               'nombre': $scope.nombre,
               'fecha': $scope.fecha,
               'hora': $scope.hora,
               'lugar': $scope.lugar,
               'descripcion': $scope.descripcion,
               'fk': recuperar.codigo
              }).then(function(response){
                    alert(response.data);
                },function(error){
                    alert("Error");
                    
                });                     
      }  
 });  


 app.controller("unir",function($scope, $http, recuperar){  
        
      $scope.UNIR = function(){ 


            $scope.records = [
       {
            "nombre" : "Árboles en JAVA",
            "fecha" : "24/04/2018",
            "hora" : "10:00:00",
            "lugar" : "Biblioteca",
            "descripcion" : "Asesoría en la creación de árboles con el lenguaje java"
        },{
            "nombre" : "Insercción de datos en bases de datos Mysql ",
            "fecha" : "25/04/2018",
            "hora" : "13:00:00",
            "lugar" : "Modulo Y",
            "descripcion" : "Ayudar a comprender cómo ingresar datos en una base de datos Mysql"
        }
    ]
        }            
 });  


 app.controller('validarController', ['$scope', '$http',function($scope, $http) { 
                
                $scope.validarSesion = function() {
                var encodedString = 'correo=' +$scope.correo + '&password=' +$scope.password;
                
                $http({
                    method: 'POST',
                    url: 'PHP/autentificacion2.php',
                    data: encodedString,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                
                .success(function(data) {
                        if ( data.trim() === 'wrong') {
                            alert("El correo ingresado no está registrado");                             
                        } 
                        else{alert("nao");}
                }) 
            }
    }]);



 function  validar()
{
  var codigo,correo;
	correo = document.getElementById('correo').value;

  var expresion =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@alumnos\.udg+\.mx/;
  var expresion2 = /^([0-9])*$/;
  if(correo === "")
  {
    swal('Oops...','Todos los campos deben de ser llenados!','error')
    return false;
  }
  if (!expresion.test(correo))
  {
    alert("CORREO UDG NO VALIDO");
    return false;
  }
  else {return true;}   
}



 app.controller('createController', ['$scope', '$http',function($scope, $http) { 
                
                $scope.crearUsuario = function() {
                if(validar() === true){
                    alert("si");
                var encodedString = 'correo=' +$scope.correo;
 
                $http({
                    method: 'POST',
                    url: 'enviaCorreo.php',
                    data: encodedString,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                
                .success(function(data) {
                        if ( data.trim() === 'correct') {
                                
                            alert("Bien");
                        } else {
                            alert("El correo ingresado no es válido");
                        }
                }) 
                }
            }
    }]);












