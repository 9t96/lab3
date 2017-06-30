///<reference path="Persona.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Clase Ciudadano.
 */
var Entidades;
(function (Entidades) {
    var Ciudadano = (function (_super) {
        __extends(Ciudadano, _super);
        function Ciudadano(nombre, edad, apellido, dni, sexo, pais) {
            var _this = _super.call(this, nombre, edad, apellido) || this;
            _this.dni = dni;
            _this.pais = pais;
            _this.sexo = sexo;
            return _this;
        }
        /**
        * Retorna el auto en formato JSON.
        */
        Ciudadano.prototype.CiudadanoToJson = function () {
            return _super.prototype.PersonaToString.call(this) + ',"sexo":"' + this.sexo + '","pais":"' + this.pais + '","dni":"' + this.dni + '"}';
        };
        return Ciudadano;
    }(Entidades.Persona));
    Entidades.Ciudadano = Ciudadano;
})(Entidades || (Entidades = {}));
