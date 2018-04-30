<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET, POST');

$conn = new mysqli("localhost", "root", "12345", "Red social");

$result = $conn->query("SELECT * FROM Grupos");
$data = array();

while($row = $result->fetch_array(MYSQLI_ASSOC)) {

    $data[] = array("Nombre"=>$row['nombre_grupo'],"Fecha"=>$row['fecha'],"Hora"=>$row['hora'],"Lugar"=>$row['lugar'],"Descripcion"=>$row['descripcion'],"Asesor"=>$row['fk_usuario'],"Cupos"=>$row['cupos']);
    
}

$conn->close();

echo json_encode($data);
?>
