/**
 * Clase Persona.
 */
var Entidades;
(function (Entidades) {
    var Persona = (function () {
        function Persona(nombre, edad, apellido) {
            this.nombre = nombre;
            this.edad = edad;
            this.apellido = apellido;
        }
        /**
        * Retorna el auto en formato JSON.
        */
        Persona.prototype.PersonaToString = function () {
            return '{"nombre":"' + this.nombre + '","apellido":"' + this.apellido + '","edad":"' + this.edad + '"';
        };
        return Persona;
    }());
    Entidades.Persona = Persona;
})(Entidades || (Entidades = {}));
