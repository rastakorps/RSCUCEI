<?php

 $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $nombre = $request->nombre;
    $fecha = $request->fecha;
    $hora = $request->hora;
    $lugar = $request->lugar;
    $descripcion = $request->descripcion;
    $fk = $request->fk;

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

$sql = "INSERT INTO Grupos(nombre_grupo,fecha,hora,lugar,descripcion,fk_usuario) VALUES ('$nombre','$fecha','$hora','$lugar','$descripcion','$fk')";

if ($conn->query($sql) === TRUE) {
    echo "correct";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
