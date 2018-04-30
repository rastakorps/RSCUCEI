<?php
 $postdata = file_get_contents("php://input");
 $request = json_decode($postdata);
 $nombre = $request->nombre;
 $apellido = $request->apellido;
 $telefono = $request->telefono;
 $codigo = $request->codigo;
 $correo = $request->correo;


$servername = "localhost";
$username = "root";
$password = "12345"; //Your User Password
$dbname = "Red social"; //Your Database Name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO Usuarios(nombre_usuario,apellido_usuario,telefono,codigo,correo) VALUES ('$nombre', '$apellido', '$telefono', '$codigo', '$correo')";

if ($conn->query($sql) === TRUE) {
    echo "correcto";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
