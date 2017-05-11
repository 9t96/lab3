<?php


if (isset($_POST["name"]) && isset($_POST["sur"]) && isset($_POST["age"])) {
	
	echo 
	"<p>"."Felicitacion haz ejecutado con exito BOOTSTRAP Y JQUERY"."Los datos que enviaste son"." ".$_POST["name"]." ".$_POST["sur"]." ".$_POST["age"]."</p>";
}


?>