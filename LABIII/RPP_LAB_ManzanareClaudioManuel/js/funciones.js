function cambiarProgreso()
{
	$(function(){
		var valor=$("#miRango").val();
		$("#progreso").css('width',valor+'%');
	});
}

function cambiarProgresoConDelay()
{
	$.ajax({
	type:"POST", 
	dataType:"Text", 
	url:"./backend/delay.php",
	})
	.done(function(valor){

		$("#progreso").css('width',valor+'%');
        $("#result").html(valor+"%");

	})		
	.fail(function(jqXHR, textStatus, errorThrown){
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	})
}

function CambiarColor()
{	
	var color = $("#color").val();
	$("#body").css('background-color',color);
}


function agregarRemera()
{
    var pagina = "./backend/administrarRemeras.php";

    $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "text",
            data: $("#form").serialize()+"&op=agregarRemera",
            async: true
            })
            .done(function (arrayRemeras) {
                alert("Remera agregada");
                $("#listado").html(arrayRemeras);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
}

function listarRemeras()
{
    var pagina = "./backend/administrarRemeras.php";

    $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "text",
            data: $("#form").serialize()+"&op=listarRemeras",
            async: true
            })
            .done(function (arrayRemeras) {
                alert("Listado de remeras:");
                $("#listado").html(arrayRemeras);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
}


function borrarRemera($id)
{
    var pagina = "./backend/administrarRemeras.php";

    $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "text",
            data: $("#form").serialize()+"&op=quitarRemera"+"&id="+$id,
            async: true
            })
            .done(function (arrayRemeras) {
                alert("Remera borrada");
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
}
