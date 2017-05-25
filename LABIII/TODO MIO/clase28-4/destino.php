<?php
/*
if (isset($_GET["txtValor"])) {
	
	echo $_GET["txtValor"];
}
else
{
	echo $_POST["nUno"];
}*/

if (isset($_POST["nUno"]) && isset($_POST["nDos"]) && isset($_POST["operacion"])) {
	
	switch ($_POST["operacion"]) {
		case 'sumar':
			echo (intval($_POST["nUno"])) + (intval($_POST["nDos"]));
			break;
		case 'multiplicar':
			echo (intval($_POST["nUno"])) * (intval($_POST["nDos"]));
			break;
		case 'dividir':
			if (intval($_POST["nDos"]) == 0)
			{
				echo "No se puede dividir por 0";
			}
			else
			{
				echo (intval($_POST["nUno"])) / (intval($_POST["nDos"]));

			}
			break;
		case 'restar':
			echo (intval($_POST["nUno"])) - (intval($_POST["nDos"]));
			break;
	}
}

?>