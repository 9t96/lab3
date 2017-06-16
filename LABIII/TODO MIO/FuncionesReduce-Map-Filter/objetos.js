var DATA = (function () {
    var d = [
        { "nombre": "Juana", "sexo": "F", "edad": 25 },
        { "nombre": "Roberto", "sexo": "M", "edad": 40 },
        { "nombre": "Julian", "sexo": "M", "edad": 35 }
    ];
    return d;
})();
var ejemplo = DATA;
//Me retorna todos los nombres dentro de una array.
//let nombres  = DATA.map(DATA => DATA.nombre);
/*
let nombre  = DATA.filter(function(){

    
    
    DATA.forEach(element => {
        if(element.nombre.substr(0,1) == "J"){return element;}
    });
});
*/
//let num = 0;
/*let edades  = DATA.map(DATA => DATA.edad);
let resultado = edades.reduce(function(num,edades)
{
    return num+=edades;
});
/*
let resultado = DATA.reduce(function(num,DATA)
{
    return num+=DATA.edad;
});*/
//filta por nombre y devuelve el nombre.
var sex = DATA.filter(function (DATA) { return DATA.sexo == "F"; }).map(function (DATA) { return DATA.nombre; });

for (var i = 0; i < ejemplo.length; i++)
    console.log(ejemplo[i].nombre + " - " + ejemplo[i].sexo + " - " + ejemplo[i].edad);
console.log(sex);
