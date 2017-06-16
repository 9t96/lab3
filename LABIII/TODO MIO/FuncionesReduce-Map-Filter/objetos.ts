let DATA = (function() {

    let d : any[] = [
        {"nombre" : "Juana", "sexo" : "F", "edad" : 25},
        {"nombre" : "Roberto", "sexo" : "M", "edad" : 40},
        {"nombre" : "Julian", "sexo" : "M", "edad" : 35}
    ];

    return d;
})();

let ejemplo = DATA;

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
let sex = DATA.filter(DATA => DATA.sexo == "F").map(DATA => DATA.nombre);





for(let i=0; i<ejemplo.length; i++)
    console.log(ejemplo[i].nombre + " - " + ejemplo[i].sexo + " - " + ejemplo[i].edad);


console.log(sex);