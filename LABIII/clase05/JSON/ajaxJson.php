<!doctype html>
<html>
<head>
	<title>Visualizador de Fotos Subidas</title>
	  
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../css/animacion.css">		
		
		<!-- Estilos propios -->
		<link rel="stylesheet" type="text/css" href="../css/estilo.css">

        <!-- jQuery library -->
		<script type="text/javascript" src="../js/jquery.js"></script>

		<!-- Funciones Propias -->
		<script type="text/javascript" >

			function SubirFoto(){
				
				var pagina = "./subirImagen.php";
				var foto = $("#archivo").val();
				
				if(foto === "")
				{
					return;
				}
				
				var archivo = $("#archivo")[0];
				var formData = new FormData();
				formData.append("archivo",archivo.files[0]);
				formData.append("caso", "1");

				$.ajax({
					type: 'POST',
					url: pagina,
					dataType: "json",
					cache: false,
					contentType: false,
					processData: false,
					data: formData,
					async: true
				})
				.done(function (objJson) {

					if(!objJson.Exito){
						console.clear();
						console.log(objJson.Mensaje);
						return;
					}
					$("#fotoTmp").attr("src", objJson.PathTemporal);
					$("#hdnFotoSubir").val(objJson.PathTemporal);
					$("#lblFoto").html("Nombre de la imagen: "+objJson.NombreFoto);
				})
				.fail(function (jqXHR, textStatus, errorThrown) {
					alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
				});   
			}		
		</script>
</head>
<body>
	<a href="../index.html"  class="btn btn-info">Volver al Inicio</a>
	<div class="container">
		<div class="page-header">
			<h1>VISUALIZAR FOTOS SUBIDAS</h1>      
		</div>
		<div id="divFrm" class="animated bounceInLeft" style="height:200px;overflow:auto;margin-top:10px;border-style:none">
			<input type="file" id="archivo" onchange="SubirFoto()" /> 

		</div>
		<div id="divFoto"  class="animated bounceInLeft;" >
			<div style="width:35%;float:left;border-style:none"></div>
			<div style="width:65%;float:right;border-style:none">
					
				<img id="fotoTmp" src="../fotos/pordefecto.png" style="float:left" class="fotoform" />
			</div>
		</div>
	</div>
			<div style="width:35%;float:left;border-style:none"></div>
			<div style="width:65%;float:right;border-style:none">
				<br>
				<span id="lblFoto" style="font-size:150%" ></span>		
			</div>
</body>
</html>