
var xhttp = new XMLHttpRequest();

function EnviarAjax()
{

	var valor = document.getElementById("txtValor").value;

	xhttp.open("GET","destino.php?txtValor="+valor,true);

	xhttp.send();

	xhttp.onreadystatechange = function()
	{
		if (xhttp.readyState == 4 && xhttp.status == 200)
		{
			console.log(xhttp.responseText);
		}
	}
}

/*
function EnviarPost()
{
	var valor = document.getElementById("txtValor").value//NO OLVIDAR VALUEEEE;

	xhttp.open("POST","destino.php",true);

	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xhttp.send("txtValor="+valor);

	xhttp.onreadystatechange = function()
	{
		if (xhttp.readyState == 4 && xhttp.status == 200)
		{
			console.log(xhttp.responseText);
		}
	}	
}
*/

2

function EnviarPost()
{º
	var nuno = document.getElementById("nUno").value
	var ndos = document.getElementById("nDos").value;
	var operador = document.getElementById("operacion").value;//NO OLVIDAR VALUEEEE;

	xhttp.open("POST","destino.php",true);

	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	//Si se envian mas de uno se antepone ampersand.
	xhttp.send("nUno="+nuno+"&nDos="+ndos+"&operacion="+operador);

	xhttp.onreadystatechange = function()
	{
		if (xhttp.readyState == 4 && xhttp.status == 200)
		{
			console.log(xhttp.responseText);
		}
	}	
}