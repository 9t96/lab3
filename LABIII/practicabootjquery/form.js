

function EnviarPost()
{
	var datos = "name="+$("#name").val()+"&sur="+$("#sur").val()+"&age="+$("#age").val()+"&arch="+$("#arch").val();

	$.ajax({
		type:"POST", // metodo de envio
		dataType:"Text", //tipo de dato
		url:"destino.php",// destino de la peticion
		data:datos, //datos a procesar
		async:true, //TRUE OR FALSE
		statusCode:
		{
			200:function(){ alert("Se encontro");},
			404:function(){ alert("Error 404");}
		}
	})
	.done(function(DatosDevueltos){

		//alert(DatosDevueltos);
		$("#mip").html(DatosDevueltos);
	})		
	.fail(function(jqXHR, textStatus, errorThrown){
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	})
	

}