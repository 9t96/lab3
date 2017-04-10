<?php
require_once ("clases/producto.php");

$alta = isset($_POST["guardar"]) ? TRUE : FALSE;

if($alta) {

	//INDICO CUAL SERA EL DESTINO DEL ARCHIVO SUBIDO
	$destino = "archivos/" . $_FILES["archivo"]["name"];

	$uploadOk = TRUE;

	$tipoArchivo = pathinfo($destino, PATHINFO_EXTENSION);

	//VERIFICO QUE EL ARCHIVO NO EXISTA

	//VERIFICO EL TAMAÑO MAXIMO QUE PERMITO SUBIR
	if ($_FILES["archivo"]["size"] > 500000) {
		$uploadOk = FALSE;
		$mensaje = "El archivo es demasiado grande. Verifique!!!";
		include("mensaje.php");
	}

	//OBTIENE EL TAMAÑO DE UNA IMAGEN, SI EL ARCHIVO NO ES UNA
	//IMAGEN, RETORNA FALSE
	$esImagen = getimagesize($_FILES["archivo"]["tmp_name"]);

	if($esImagen === FALSE) {//NO ES UNA IMAGEN
		$uploadOk = FALSE;
		$mensaje = "S&oacute;lo son permitidas IMAGENES.";
		include("mensaje.php");
	}
	else {// ES UNA IMAGEN

		//SOLO PERMITO CIERTAS EXTENSIONES
		if($tipoArchivo != "jpg" && $tipoArchivo != "jpeg" && $tipoArchivo != "gif"
			&& $tipoArchivo != "png") {
			$uploadOk = FALSE;
			$mensaje = "S&oacute;lo son permitidas imagenes con extensi&oacute;n JPG, JPEG, PNG o GIF.";
			include("mensaje.php");
		}
	}

	//VERIFICO SI HUBO ALGUN ERROR, CHEQUEANDO $uploadOk
	if ($uploadOk === FALSE) {

		echo "<br/><br/>NO SE PUDO SUBIR EL ARCHIVO.";

	} else {
		//MUEVO EL ARCHIVO DEL TEMPORAL AL DESTINO FINAL
		if (move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino)) {

			$p = new Producto($_POST["codBarra"],$_POST["nombre"],basename($_FILES["archivo"]["name"]));

		//GUARDAR EL PRODUCTO			
		} 
		else {
			$mensaje = "Lamentablemente ocurri&oacute; un error y no se pudo subir el archivo.";
			include("mensaje.php");
		}
	}
}//if $alta