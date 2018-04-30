<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET, POST');

$conn = new mysqli("localhost", "root", "12345", "Red social");

$result = $conn->query("SELECT * FROM Usuarios WHERE correo='".$_POST['correo']."'");
$data = array();

while($row = $result->fetch_array(MYSQLI_ASSOC)) {

    $data[] = array("Name"=>$row['nombre_usuario'],"FK"=>$row['id_usuario']);
    
}

$conn->close();

echo json_encode($data);
?>

