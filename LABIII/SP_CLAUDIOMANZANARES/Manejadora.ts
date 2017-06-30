///<reference path="Ciudadano.ts"/>

namespace Entidades
{
    export class Manejadora
    {
        public static AgregarPersona():void
        {
            let nombre:string;
            let edad:number;
            let apellido:string;
            let dni:number;
            let pais:string;
            let sexo:string;

           let miHidden:string = (<HTMLInputElement>document.getElementById('hdnIdAuto')).value;

            nombre     = (<HTMLInputElement>document.getElementById('txtNombre')).value;
            edad       = Number((<HTMLInputElement>document.getElementById('txtEdad')).value);
            apellido   = (<HTMLInputElement> document.getElementById('txtApellido')).value;
            dni        = Number((<HTMLInputElement> document.getElementById('txtDni')).value);
            pais       = (<HTMLInputElement> document.getElementById('txtPais')).value;
            
            if((<HTMLInputElement> document.getElementById('rdFem')).checked)
            {
                sexo = (<HTMLInputElement> document.getElementById('rdFem')).value;
            }
            else
               sexo = (<HTMLInputElement> document.getElementById('rdMasc')).value;

            console.log(sexo);
            
               // (nombre:string,edad:number,apellido:string,dni:number,sexo:string,pais:string)
            let persona:Ciudadano = new Ciudadano(nombre,edad,apellido,dni,sexo,pais);

            //Traigo los autos para no pisar la info.
            let personasLS = JSON.parse(localStorage.getItem("personas"));
            //Si no hay autos deja el array vacio.
            let ciudadanosJson:Array<JSON> = personasLS !== null ? personasLS :[];
            //Transformo en json.
            ciudadanosJson.push(JSON.parse(persona.CiudadanoToJson()));
            //Los guardo en localstroge.
            localStorage.setItem("personas",JSON.stringify(ciudadanosJson));

           if (miHidden !== "") {

                this.EliminarCiudadano(parseInt(miHidden));    
                this.MostrarCiudadanos();      
            }
                                   
        }

        public static MostrarCiudadanos()
        {   
            let apellidoEnLetras:string;
            let personas = JSON.parse(localStorage.getItem("personas"));
            
            if(personas !== null)
            {   
               if(localStorage.length > 0)
               {
                    let tabla:string;

                    tabla+="<table class='table table-default'>"+
                        "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Pais</th><th>Dni</th><th>Acciones</th></tr>";

                    for (let index = 0; index < personas.length; index++) {

                        tabla+= "<tr>"+
                                "<td>"+personas[index].nombre+"</td>"+
                                "<td>"+personas[index].apellido+"</td>"+
                                "<td>"+personas[index].edad+"</td>"+
                                "<td>"+personas[index].sexo+"</td>"+
                                "<td>"+personas[index].pais+"</td>"+
                                "<td>"+personas[index].dni+"</td>"+
                                "<td>"+
                                "<a class='btn btn-danger' onclick='Entidades.Manejadora.EliminarCiudadano("+index+")'>Eliminar</a>"+
                                "<a class='btn btn-warning' onclick='Entidades.Manejadora.ModificarCiudadano("+index+")'>Modificar</a>"+
                                "</td>"+
                                "</tr>";              
                    }
                    

                    tabla+="</table>";

                    (<HTMLInputElement> document.getElementById('divTabla')).innerHTML = tabla;
               }
              
            }
        }

        public static EliminarCiudadano(i:number):void
        {
            let personasLS = JSON.parse(localStorage.getItem("personas"));

            let personasJson:Array<JSON> = personasLS !== null ? personasLS :[];

            personasJson.splice(i,1);

            localStorage.clear();

            localStorage.setItem("personas",JSON.stringify(personasJson));

            Manejadora.MostrarCiudadanos();

        }

        /**
         * Llena los input con los datos de auto a modificar.
         * @param i Index del auto a modificar.
         */
        public static ModificarCiudadano(i:number):void
        {
            let personasLS = JSON.parse(localStorage.getItem("personas"));

            (<HTMLInputElement>document.getElementById('txtNombre')).value= personasLS[i].nombre;
            (<HTMLInputElement>document.getElementById('txtEdad')).value = personasLS[i].edad;
            (<HTMLInputElement> document.getElementById('txtApellido')).value = personasLS[i].apellido;
            (<HTMLInputElement> document.getElementById('txtDni')).value = personasLS[i].dni;
            (<HTMLInputElement> document.getElementById('txtPais')).value = personasLS[i].pais;

            (<HTMLInputElement>document.getElementById('hdnIdAuto')).value= i.toString();
        }

        public static FiltrarPorPais()
        {   
            
            let pais = (<HTMLInputElement> document.getElementById('txtPais')).value;
            let personas = JSON.parse(localStorage.getItem("personas"));

            let personasXpais = personas.filter(personas => personas.pais == pais);
          
            if(personasXpais !== null)
            {   
              if(localStorage.length > 0)
               {
                    let tabla:string;

                    tabla+="<table class='table table-default'>"+
                        "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Pais</th><th>Dni</th><th>Acciones</th></tr>";

                    for (let index = 0; index < personasXpais.length; index++) {

                        tabla+= "<tr>"+
                                "<td>"+personasXpais[index].nombre+"</td>"+
                                "<td>"+personasXpais[index].apellido+"</td>"+
                                "<td>"+personasXpais[index].edad+"</td>"+
                                "<td>"+personasXpais[index].sexo+"</td>"+
                                "<td>"+personasXpais[index].pais+"</td>"+
                                "<td>"+personasXpais[index].dni+"</td>"+
                                "<td>"+
                                "<a class='btn btn-danger' onclick='Entidades.Manejadora.EliminarCiudadano("+index+")'>Eliminar</a>"+
                                "<a class='btn btn-warning' onclick='Entidades.Manejadora.ModificarCiudadano("+index+")'>Modificar</a>"+
                                "</td>"+
                                "</tr>";              
                    }
                    

                    tabla+="</table>";

                    (<HTMLInputElement> document.getElementById('divTabla')).innerHTML = tabla;
               }

        }



    }
}
}