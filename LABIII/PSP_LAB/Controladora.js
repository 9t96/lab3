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
            marca = document.getElementById('txtMarca').value;
            precio = Number(document.getElementById('txtPrecio').value);
            color = document.getElementById('txtColor').value;
            console.log(color);
            var auto1 = new Entidades.Auto(marca, color, precio);
            //Traigo los autos para no pisar la info.
            var autosLS = JSON.parse(localStorage.getItem("autos"));
            //Si no hay autos deja el array vacio.
            var autosJson = autosLS !== null ? autosLS : [];
            //Transformo en json.
            autosJson.push(JSON.parse(auto1.ToJson()));
            //Los guardo en localstroge.
            localStorage.setItem("autos", JSON.stringify(autosJson));
            if (miHidden !== "") {
                this.EliminarAuto(parseInt(miHidden));
                this.MostrarAuto();
            }
        };
        Controladora.MostrarAuto = function () {
            var colorEnLetras;
            var autos = JSON.parse(localStorage.getItem("autos"));
            if (autos !== null) {
                if (localStorage.length > 0) {
                    var tabla = void 0;
                    tabla += "<table class='table table-default'>" +
                        "<tr><th>Marca</th><th>Color</th><th>Precio</th><th>Acciones</th></tr>";
                    for (var index = 0; index < autos.length; index++) {
                        switch (parseInt(autos[index].color)) {
                            case 1:
                                colorEnLetras = "Rojo";
                                break;
                            case 2:
                                colorEnLetras = "Negro";
                                break;
                            case 3:
                                colorEnLetras = "Blanco";
                                break;
                        }
                        tabla += "<tr>" +
                            "<td>" + autos[index].marca + "</td>" +
                            "<td>" + colorEnLetras + "</td>" +
                            "<td>" + autos[index].precio + "</td>" +
                            "<td>" +
                            "<a class='btn btn-danger' onclick='Entidades.Controladora.EliminarAuto(" + index + ")'>Eliminar</a>" +
                            "<a class='btn btn-warning' onclick='Entidades.Controladora.ModificarAuto(" + index + ")'>Modificar</a>" +
                            "</td>" +
                            "</tr>";
                    }
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
        /**
         * Llena los input con los datos de auto a modificar.
         * @param i Index del auto a modificar.
         */
        Controladora.ModificarAuto = function (i) {
            var autosLS = JSON.parse(localStorage.getItem("autos"));
            document.getElementById('txtMarca').value = autosLS[i].marca;
            document.getElementById('txtPrecio').value = autosLS[i].precio;
            document.getElementById('txtColor').value = autosLS[i].color;
            document.getElementById('hdnIdAuto').value = i.toString();
        };
        Controladora.FiltrarPorColor = function () {
            var colorEnLetras;
            var color = document.getElementById('txtColor').value;
            var autos = JSON.parse(localStorage.getItem("autos"));
            var autosXcolor = autos.filter(function (autos) { return autos.color == color; });
            if (autosXcolor !== null) {
                if (localStorage.length > 0) {
                    var tabla = void 0;
                    tabla += "<table class='table table-default'>" +
                        "<tr><th>Marca</th><th>Color</th><th>Precio</th><th>Acciones</th></tr>";
                    for (var index = 0; index < autosXcolor.length; index++) {
                        switch (parseInt(autosXcolor[index].color)) {
                            case 1:
                                colorEnLetras = "Rojo";
                                break;
                            case 2:
                                colorEnLetras = "Negro";
                                break;
                            case 3:
                                colorEnLetras = "Blanco";
                                break;
                        }
                        tabla += "<tr>" +
                            "<td>" + autosXcolor[index].marca + "</td>" +
                            "<td>" + colorEnLetras + "</td>" +
                            "<td>" + autosXcolor[index].precio + "</td>" +
                            "<td>" +
                            "<a class='btn btn-danger' onclick='Entidades.Controladora.EliminarAuto(" + index + ")'>Eliminar</a>" +
                            "<a class='btn btn-warning' onclick='Entidades.Controladora.ModificarAuto(" + index + ")'>Modificar</a>" +
                            "</td>" +
                            "</tr>";
                    }
                    tabla += "</table>";
                    document.getElementById('divTabla').innerHTML = tabla;
                }
            }
        };
        return Controladora;
    }());
    Entidades.Controladora = Controladora;
})(Entidades || (Entidades = {}));
