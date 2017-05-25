<?php

//PUNTO 4
/*
if (isset($_POST["objJSON"])) {
	
	$standar = json_decode(json_encode($_POST["objJSON"]));

	var_dump($standar);

	foreach ($standar as $value) {
		echo $value->nombre."-".$value->codBarra."-".$value->precio;
	}
}*/

//PUNTO 7
/*
if (isset($_POST)) {
	
	$rsc = fopen("auto.json", "r+");

	$mailaine = fgets($rsc);

	fclose($rsc);

	echo $mailaine;

}
*/

//PUNTO 8

if (isset($_POST)) {
	
	//file_get_contents
	$rsc = fopen("autos.json", "r+");

	while (!feof($rsc)) {
		
		$linea = fgets($rsc);
		echo $linea;
	}

	fclose($rsc);

}

?>