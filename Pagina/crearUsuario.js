 function  validar()
{
  var codigo,correo;
	correo = document.getElementById('correo').value;
	codigo = document.getElementById('pass').value;
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
                var encodedString = 'correo=' +$scope.correo;
 
                $http({
                    method: 'POST',
                    url: 'PHP/autentificacion.php',
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
