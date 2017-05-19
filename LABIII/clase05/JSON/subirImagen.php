<?php
require_once("./clases/Archivo.php");

$caso = isset($_POST['caso']) ? $_POST['caso'] : NULL;

switch ($caso) {

	case 1:
		
		$res = Archivo::Subir();
		
		echo json_encode($res);
        
        break;
}