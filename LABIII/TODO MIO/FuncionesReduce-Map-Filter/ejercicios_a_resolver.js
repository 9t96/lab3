/// <reference path="MOCK_DATA.ts" />
var users = datos.MOCK_DATA;
/*
for(let i=0; i<users.length; i++)
    console.log(users[i].id  + " - " + users[i].nombre + " - " + users[i].apellido + " - " +
    users[i].email + " - " + users[i].sexo + " - " + users[i].trabajo + " - " + users[i].pais + " - " +
    users[i].ciudad + " - " + users[i].edad);
*/
//Retornar todos los trabajos de los usuarios
var trabajos = users.map(function (users) { return users.trabajo; });
//console.log(trabajos);
//Retornar todos los paises de los usuarios
var paises = users.map(function (users) { return users.pais; });
//console.log(paises);
//Retornar un array de objetos de aquellos usuarios cuyo pais sea China
var chinas = users.filter(function (user) { return user.pais == "China"; });
//console.log(chinas);
//Retornar una array de objetos de todos los usuarios menores a 21 años
var jovenes = users.filter(function (user) { return user.edad < 21; });
//console.log(jovenes);
//Retornar la cantidad de usuarios con sexo masculino (Male)
var cantidadMasculinos = users.filter(function (user) { return user.sexo == "Male"; }).length;
//console.log(cantidadMasculinos);
// Retornar una array de strings (el nombre de los usarios de sexo femenino (Female))
var nombresFemeninos = users.filter(function (users) { return users.sexo == "Female"; }).map(function (users) { return users.nombre; });
//console.log(nombresFemeninos);
// Retornar una array de strings (el email de los usarios de sexo masculino (Male))
var mailsMasculinos = users.filter(function (users) { return users.sexo == "Male"; }).map(function (users) { return users.email; });
//console.log(mailsMasculinos);
// Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
var datosUsers = users.map(function (users) {
    return users.nombre + "-" + users.apellido + "-" + users.ciudad;
});
//console.log(datosUsers);
// Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
// masculinos mayores de 35 años
var datosUsersMayoresMasculinos = users.filter(function (users) { return users.edad > 35 && users.sexo == "Male"; }).map(function (users) {
    return users.nombre + "-" + users.apellido + "-" + users.ciudad;
});
//console.log(datosUsersMayoresMasculinos);
// Retornar el promedio de edad de los usuarios
var aum = 0;
var promedioEdad = users.reduce(function (users) {
    return acum += users.edad;
});
console.log(promedioEdad / users.length);
// Retornar el promedio de edad de los usuarios masculinos
var promedioEdadMasculinos = function () {
};
//console.log(promedioEdadMasculinos());  
// Retornar el promedio de edad de los usuarios egipcios (Egypt)
var promedioEdadEgipcios = function () {
};
//console.log(promedioEdadEgipcios());  
