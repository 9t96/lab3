///<reference path="Auto.ts"/>
var Entidades;
(function (Entidades) {
    var Controladora = (function () {
        function Controladora() {
        }
        Controladora.AgregarAuto = function () {
            var marca;
            var precio;
            var color;
            var miHidden = document.getElementById('hdnIdAuto').value;
            if (miHidden !== "") {
                marca = document.getElementById('txtMarca').value;
                precio = Number(document.getElementById('txtPrecio').value);
                color = document.getElementById('txtColor').value;
                Controladora.EliminarAuto(Number(document.getElementById('miHidden').value));
            }
            var auto1 = new Entidades.Auto(marca, color, precio);
            var autosLS = JSON.parse(localStorage.getItem("autos"));
            var autosJson = autosLS !== null ? autosLS : [];
            autosJson.push(JSON.parse(auto1.ToJson()));
            localStorage.setItem("autos", JSON.stringify(autosJson));
        };
        Controladora.MostrarAuto = function () {
            var autos = JSON.parse(localStorage.getItem("autos"));
            if (autos !== null) {
                if (localStorage.length > 0) {
                    var tabla = void 0;
                    tabla += "<table class='table table-default'>" +
                        "<tr><th>Marca</th><th>Color</th><th>Precio</th><th>Acciones</th></tr>";
                    for (var index = 0; index < autos.length; index++) {
                        tabla += "<tr><td>" + autos[index].marca + "</td><td>" + autos[index].color + "</td><td>" + autos[index].precio + "</td><td><a class='btn btn-danger' onclick='Entidades.Controladora.ModificarAuto(" + index + ")'>Eliminar</a><a class='btn btn-warning' onclick='Entidades.Controladora.ModificarAuto(" + index + ")'>Modificar</a></tr>";
                    }
                    /*
                    autos.forEach(element => {
                        
                        tabla+= "<tr><td>"+element.marca+"</td><td>"+element.color+"</td><td>"+element.precio+"</td><td><a class='btn btn-danger' onclick='Entidades.Controladora.EliminarAuto()'>Eliminar</a><a class='btn btn-warning'>Modificar</a></tr>";
                        //console.log(element.marca+"-"+element.color+"-"+element.precio);
                    });*/
                    tabla += "</table>";
                    document.getElementById('divTabla').innerHTML = tabla;
                }
            }
        };
        Controladora.EliminarAuto = function (i) {
            var autosLS = JSON.parse(localStorage.getItem("autos"));
            var autosJson = autosLS !== null ? autosLS : [];
            autosJson.splice(i, 1);
            localStorage.clear();
            localStorage.setItem("autos", JSON.stringify(autosJson));
            Controladora.MostrarAuto();
        };
        Controladora.ModificarAuto = function (i) {
            var autosLS = JSON.parse(localStorage.getItem("autos"));
            document.getElementById('txtMarca').value = autosLS[i].marca;
            document.getElementById('txtPrecio').value = autosLS[i].precio;
            document.getElementById('txtColor').value = autosLS[i].color;
            document.getElementById('hdnIdAuto').value = i.toString();
        };
        Controladora.FiltrarPorColor = function () {
        };
        return Controladora;
    }());
    Entidades.Controladora = Controladora;
})(Entidades || (Entidades = {}));
