console.log(QueContiene("Holamundo"));
console.log(QueContiene("holamundo"));
console.log(QueContiene("HoLAMUndo"));



function QueContiene(miCadena : string) : void 
{ 
    if(miCadena === miCadena.toUpperCase())
    {
        console.log("Es todo mayuscula");
    }
    else if(miCadena === miCadena.toLowerCase()) 
    {
        console.log("Es todo minuscula");
    }
    else
    {
        console.log("Es una mezcla");
    }
    
}
