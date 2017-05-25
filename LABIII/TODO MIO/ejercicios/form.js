

function EnviarPost()
{
	$.ajax({
		type:"POST",
		dataType:"Text",
		url:"destino.php",
		async:true,
		statusCode:{
			200:function(){ alert("Se encontro");},
			404:function(){ alert("Error 404");}
		}
	})
	.done(function(DatosDevueltos){

		$("#datosdevueltos").Text(DatosDevueltos);

	})
	.fail(function(jqXHR, textStatus, errorThrown){
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	});

}