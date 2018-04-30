<?php
$mail = "Prueba de mensaje";
//Titulo
$titulo = "PRUEBA DE TITULO";
$cor = ".$_POST['correo'].";//Enviamos el mensaje a tu_dirección_email 
$bool = mail($cor,$titulo,$mail);
print($bool);
if($bool){
    echo "correct";
}else{
    echo "false";
}
?>

