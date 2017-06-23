/**
 * Clase auto.
 */
var Entidades;
(function (Entidades) {
    var Auto = (function () {
        function Auto(marca, color, precio) {
            this.marca = marca;
            this.color = color;
            this.precio = precio;
        }
        /**
        * Retorna el auto en formato JSON.
        */
        Auto.prototype.ToJson = function () {
            return '{"marca":"' + this.marca + '","precio":' + this.precio + ',"color":"' + this.color + '"}';
        };
        return Auto;
    }());
    Entidades.Auto = Auto;
})(Entidades || (Entidades = {}));
