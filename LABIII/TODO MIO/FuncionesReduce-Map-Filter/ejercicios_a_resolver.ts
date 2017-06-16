
/// <reference path="MOCK_DATA.ts" />

let users = datos.MOCK_DATA;
/*
for(let i=0; i<users.length; i++)
    console.log(users[i].id  + " - " + users[i].nombre + " - " + users[i].apellido + " - " + 
    users[i].email + " - " + users[i].sexo + " - " + users[i].trabajo + " - " + users[i].pais + " - " + 
    users[i].ciudad + " - " + users[i].edad);
*/

//Retornar todos los trabajos de los usuarios
let trabajos = users.map(users => users.trabajo);

//console.log(trabajos);

//Retornar todos los paises de los usuarios
let paises = users.map(users => users.pais);

//console.log(paises);

//Retornar un array de objetos de aquellos usuarios cuyo pais sea China
let chinas = users.filter(user => user.pais == "China");

//console.log(chinas);

//Retornar una array de objetos de todos los usuarios menores a 21 años
let jovenes = users.filter(user => user.edad < 21);

//console.log(jovenes);

//Retornar la cantidad de usuarios con sexo masculino (Male)
let cantidadMasculinos = users.filter(user => user.sexo == "Male").length;

//console.log(cantidadMasculinos);

// Retornar una array de strings (el nombre de los usarios de sexo femenino (Female))
let nombresFemeninos = users.filter(function (users) { return users.sexo == "Female"; }).map(function (users) { return users.nombre; });

//console.log(nombresFemeninos);

// Retornar una array de strings (el email de los usarios de sexo masculino (Male))
let mailsMasculinos = users.filter(function (users) { return users.sexo == "Male"; }).map(function (users) { return users.email; })
//console.log(mailsMasculinos);

// Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
let datosUsers = users.map(function(users)
{
    return users.nombre +"-"+ users.apellido +"-"+ users.ciudad;
});

//console.log(datosUsers);

// Retornar un array de objetos que solo contengan los nombres, apellidos y ciudades de todos los usuarios
// masculinos mayores de 35 años
let datosUsersMayoresMasculinos = users.filter(users => users.edad > 35 && users.sexo == "Male").map(function(users)
{
    return users.nombre +"-"+ users.apellido +"-"+ users.ciudad;
});
//console.log(datosUsersMayoresMasculinos);

// Retornar el promedio de edad de los usuarios
let aum = 0;
let promedioEdad = users.reduce(function(users)
{
    return acum += users.edad;
});
console.log(promedioEdad/users.length);  

// Retornar el promedio de edad de los usuarios masculinos
let promedioEdadMasculinos = function () {

	  };

//console.log(promedioEdadMasculinos());  

// Retornar el promedio de edad de los usuarios egipcios (Egypt)
let promedioEdadEgipcios = function () {

	  };

//console.log(promedioEdadEgipcios());  
