<?php

	$NuevaPersona["nombre"]  = $_POST["name"];
	$NuevaPersona["apellido"]  = $_POST["apellido"];

	//traigo el contenido.
	//$loquecontiene = file_get_contents("city.list.min.json");

	 $rsc = fopen("nombres.json","r");

	 $loquecontiene = fread($rsc, filesize("nombres.json"));

	 fclose($rsc);

	 var_dump($loquecontiene);

	//lo transformo a un array.
	$arraydejson = json_decode($loquecontiene,true);

	//le meto mi array con datos nuevos.*/

	$contenidoFinal = json_encode($arraydejson);

	if (json_decode($contenidoFinal !== null)) {
		
		$rsc = fopen("nombres.json", "w+");

		fwrite($rsc,$contenidoFinal);

		fclose($rsc);

		echo "escribio";

		/*if (file_put_contents("city.list.min.json", $contenidoFinal)) {	
			echo "ecribio puta carajo";
		}*/
	}



?>