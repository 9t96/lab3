<?php

if (isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["edad"])) {
	
	echo 
	"Felicitacion haz ejecutado con exito 
	BOOTSTRAP Y JQUERY".
	"Los datos que enviaste son"
	" ".$_POST["nombre"].
	" ".$_POST["apellido"].
	" ".$_POST["edad"];
}


?>