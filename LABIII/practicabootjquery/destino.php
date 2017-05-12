<?php

if (isset($_POST["name"]) && isset($_POST["sur"]) && isset($_POST["age"])) {

	echo 
	"<p>"."Funciona..."."Los datos que enviaste son"." ".$_POST["name"]." ".$_POST["sur"]." ".$_POST["age"]."</p>"."<img class='img-responsive'src='messi.jpg'>";
}


?>