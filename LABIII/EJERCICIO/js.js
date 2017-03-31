    /*var nombre = "claudio";
    var apellido = "Manzanares";
    var alumno = {Nombre:nombre,Apellido:apellido,Curso:"Curso 3º \"A\""};
function MostrarAlumno()
{   

    alert(name.value+surname.value+curs.value);
}
*/
/*
var nombre = "claudio";
var apellido = "Manzanares";
var div = document.getElementById("hola");
var alumno = {Nombre:nombre,Apellido:apellido,Curso:"Curso 3º \"A\""};
div.innerHTML("alumno.Apellido+alumno.Nombre+alumno.Curso");
*/

//En la funcion los get elemnt para que en tiempo de llamada pida dato y muestre.
var alumnos = [{Nombre:"Martin",Apellido:"SAnJuan",Curso:"1ºA"}];
//Evneto que se dispara cuando se carga la pagian totalmente.
window.onload = function(){
    CambiarColor('spName');
}

function MostrarAlumno()
{   /*
    var name  = document.getElementById("txtName");
    var surname  = document.getElementById("txtApellido");
    var curs  = document.getElementById("txtCurso");    
    alert(name.value+surname.value+curs.value);*/
    for (var index = 0; index < alumnos.length; index++) {
        document.write("<br/>"+alumnos[index].Nombre,alumnos[index].Apellido,alumnos[index].Curso);
    }
}

function CambiarColor(id)
{
    var elemnt = document.getElementById(id);
    elemnt.style.color = "red";
}

function GuardarAlumno()
{  
    var name  = document.getElementById("txtName");
    var surname  = document.getElementById("txtApellido");
    var curs  = document.getElementById("txtCurso");  
    var pibe = {Nombre:name.value,Apellido:surname.value,Curso:curs.value};  
    alumnos.push(pibe);
    alert(name.value+surname.value+curs.value);
}




//var alumno = [nombre,apellido, "Curso 3º \"A\""];//Array();
//document.write(nombre);
/*alumno[0] = nombre;
alumno[1] = apellido;
alumno[2] = "Cuso 3º \"A\"";*/
//alert(nombre+"\n"+apellido+"\n"+"Cuso 3º\"A\"");
/*

for (var index = 0; index < alumno.length; index++) {
    alert(alumno[index]);   
}
*/

 //Definicion Objeto

/*
alumno.Nombre = nombre;
alumno.Apellido = apellido;
alumno.Curso  = "Curso 3º \"A\"";*/



