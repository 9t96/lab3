var Auto = (function () {
    function Auto(color, precio) {
        this.color = color;
        this.precio = precio;
    }
    Auto.prototype.getPrecio = function () {
        return this.precio;
    };
    Auto.prototype.Mostrar = function () {
        console.log(this.getPrecio() + "-" + this.color);
    };
    return Auto;
}());
//Si no se da tipo pincha el cosntructor salvo que se use LET.
var car = new Auto("Rojo", 150000);
car.Mostrar();
