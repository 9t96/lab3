	
function EscribirJSON()
{		
		$.ajax({
		type:'POST', // metodo de envio
		dataType:"text", //tipo de dato
		url:"data.php",
		data:"name=martin&apellido=lopez",
		async:true, //TRUE OR FALSE
		})
		.done(function(obj){

			console.log(obj);
			/*$(obj).appendTo("#resultado");*/
		
		})		
		.fail(function(jqXHR, textStatus, errorThrown){
			alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
		})
}