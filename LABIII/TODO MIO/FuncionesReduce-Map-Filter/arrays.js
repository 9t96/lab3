var numeritos = [1, 2, 3, 4, 5, 6];
/*
//flechita
let result = numeritos.map(numeritos => numeritos);

//normal
let resultdos = numeritos.map(function (numeritos) {
    for (let index = 0; index < result.length; index++) {
        if (result[index]%2 != 0) {
            return result[index];
        }
    }
});

//normal
let impares = numeritos.filter(function(numeritos){
return numeritos % 2 === 1;
});*/
var acum = 0; /*
for (let index = 0; index < numeritos.length; index++) {
    acum += numeritos[index];
}*/
var result = numeritos.reduce(function (numeritos, acum) {
    return acum + numeritos;
});
console.log(result);
/*
let resultado = numeritos.reduce(function());*/
//console.log(result);
//console.log(impares); 
