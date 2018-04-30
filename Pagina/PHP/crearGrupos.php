<?php  
 //insert.php  
 $connect = mysqli_connect("localhost", "root", "12345", "Red social");  
 $data = json_decode(file_get_contents("php://input"));  
 
if(count($data)>0)  
 {  
      $nombre = mysqli_real_escape_string($connect, $data->nombre);       
      $fecha = mysqli_real_escape_string($connect, $data->fecha);
      $hora = mysqli_real_escape_string($connect, $data->hora);
      $lugar = mysqli_real_escape_string($connect, $data->lugar);
      $descripcion = mysqli_real_escape_string($connect, $data->descripcion);
      $fk = mysqli_real_escape_string($connect, $data->fk);    
      $query = "INSERT INTO Grupos(nombre_grupo,fecha,hora,lugar,descripcion,fk_usuario) VALUES ('$nombre',
'$fecha','$hora','$lugar','$descripcion','$fk')";  
       print("aqui");
            
      if(mysqli_query($connect, $query))  
      {  
        print("cccccc");
        echo "correcto";  
      }  
      else  
      {  
        echo "Error";  
      }  
 }  
 ?>


