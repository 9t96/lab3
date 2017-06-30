///<reference path="Ciudadano.ts"/>
var Entidades;
(function (Entidades) {
    var Manejadora = (function () {
        function Manejadora() {
        }
        Manejadora.AgregarPersona = function () {
            var nombre;
            var edad;
            var apellido;
            var dni;
            var pais;
            var sexo;
            var miHidden = document.getElementById('hdnIdAuto').value;
            nombre = document.getElementById('txtNombre').value;
            edad = Number(document.getElementById('txtEdad').value);
            apellido = document.getElementById('txtApellido').value;
            dni = Number(document.getElementById('txtDni').value);
            pais = document.getElementById('txtPais').value;
            if (document.getElementById('rdFem').checked) {
                sexo = document.getElementById('rdFem').value;
            }
            else
                sexo = document.getElementById('rdMasc').value;
            console.log(sexo);
            // (nombre:string,edad:number,apellido:string,dni:number,sexo:string,pais:string)
            var persona = new Entidades.Ciudadano(nombre, edad, apellido, dni, sexo, pais);
            //Traigo los autos para no pisar la info.
            var personasLS = JSON.parse(localStorage.getItem("personas"));
            //Si no hay autos deja el array vacio.
            var ciudadanosJson = personasLS !== null ? personasLS : [];
            //Transformo en json.
            ciudadanosJson.push(JSON.parse(persona.CiudadanoToJson()));
            //Los guardo en localstroge.
            localStorage.setItem("personas", JSON.stringify(ciudadanosJson));
            if (miHidden !== "") {
                this.EliminarCiudadano(parseInt(miHidden));
                this.MostrarCiudadanos();
            }
        };
        Manejadora.MostrarCiudadanos = function () {
            var apellidoEnLetras;
            var personas = JSON.parse(localStorage.getItem("personas"));
            if (personas !== null) {
                if (localStorage.length > 0) {
                    var tabla = void 0;
                    tabla += "<table class='table table-default'>" +
                        "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Pais</th><th>Dni</th><th>Acciones</th></tr>";
                    for (var index = 0; index < personas.length; index++) {
                        tabla += "<tr>" +
                            "<td>" + personas[index].nombre + "</td>" +
                            "<td>" + personas[index].apellido + "</td>" +
                            "<td>" + personas[index].edad + "</td>" +
                            "<td>" + personas[index].sexo + "</td>" +
                            "<td>" + personas[index].pais + "</td>" +
                            "<td>" + personas[index].dni + "</td>" +
                            "<td>" +
                            "<a class='btn btn-danger' onclick='Entidades.Manejadora.EliminarCiudadano(" + index + ")'>Eliminar</a>" +
                            "<a class='btn btn-warning' onclick='Entidades.Manejadora.ModificarCiudadano(" + index + ")'>Modificar</a>" +
                            "</td>" +
                            "</tr>";
                    }
                    tabla += "</table>";
                    document.getElementById('divTabla').innerHTML = tabla;
                }
            }
        };
        Manejadora.EliminarCiudadano = function (i) {
            var personasLS = JSON.parse(localStorage.getItem("personas"));
            var personasJson = personasLS !== null ? personasLS : [];
            personasJson.splice(i, 1);
            localStorage.clear();
            localStorage.setItem("personas", JSON.stringify(personasJson));
            Manejadora.MostrarCiudadanos();
        };
        /**
         * Llena los input con los datos de auto a modificar.
         * @param i Index del auto a modificar.
         */
        Manejadora.ModificarCiudadano = function (i) {
            var personasLS = JSON.parse(localStorage.getItem("personas"));
            document.getElementById('txtNombre').value = personasLS[i].nombre;
            document.getElementById('txtEdad').value = personasLS[i].edad;
            document.getElementById('txtApellido').value = personasLS[i].apellido;
            document.getElementById('txtDni').value = personasLS[i].dni;
            document.getElementById('txtPais').value = personasLS[i].pais;
            document.getElementById('hdnIdAuto').value = i.toString();
        };
        Manejadora.FiltrarPorPais = function () {
            var pais = document.getElementById('txtPais').value;
            var personas = JSON.parse(localStorage.getItem("personas"));
            var personasXpais = personas.filter(function (personas) { return personas.pais == pais; });
            if (personasXpais !== null) {
                if (localStorage.length > 0) {
                    var tabla = void 0;
                    tabla += "<table class='table table-default'>" +
                        "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Pais</th><th>Dni</th><th>Acciones</th></tr>";
                    for (var index = 0; index < personasXpais.length; index++) {
                        tabla += "<tr>" +
                            "<td>" + personasXpais[index].nombre + "</td>" +
                            "<td>" + personasXpais[index].apellido + "</td>" +
                            "<td>" + personasXpais[index].edad + "</td>" +
                            "<td>" + personasXpais[index].sexo + "</td>" +
                            "<td>" + personasXpais[index].pais + "</td>" +
                            "<td>" + personasXpais[index].dni + "</td>" +
                            "<td>" +
                            "<a class='btn btn-danger' onclick='Entidades.Manejadora.EliminarCiudadano(" + index + ")'>Eliminar</a>" +
                            "<a class='btn btn-warning' onclick='Entidades.Manejadora.ModificarCiudadano(" + index + ")'>Modificar</a>" +
                            "</td>" +
                            "</tr>";
                    }
                    tabla += "</table>";
                    document.getElementById('divTabla').innerHTML = tabla;
                }
            }
        };
        return Manejadora;
    }());
    Entidades.Manejadora = Manejadora;
})(Entidades || (Entidades = {}));
