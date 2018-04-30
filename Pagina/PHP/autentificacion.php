<?php 
 
/**
 * Description: User authentication
 * @author Prem Tiwari
 */
 
//include database connection file

require_once 'config.php';
 
//define database object
global $dbc;
 
$stmt = $dbc->prepare("SELECT correo  from Usuarios WHERE 
correo='".$_POST['correo']."' AND password='".$_POST['password']."' ");

$stmt->execute();

$row = $stmt->rowCount();

if ($row > 0){    
    echo 'correct';
} else{ 
    echo 'wrong';
}

 
?>
