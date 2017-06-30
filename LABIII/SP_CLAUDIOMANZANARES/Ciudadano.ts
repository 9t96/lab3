///<reference path="Persona.ts"/>


/**
 * Clase Ciudadano.
 */
namespace Entidades
{
    export class Ciudadano extends Persona {

        dni:number;
        pais:string;
        sexo:string;

        constructor(nombre:string,edad:number,apellido:string,dni:number,sexo:string,pais:string) 
        {
            super(nombre,edad,apellido);

            this.dni = dni;
            this.pais = pais;
            this.sexo = sexo;
        }

        /**
        * Retorna el auto en formato JSON.
        */
        public CiudadanoToJson():string
        {
            return super.PersonaToString()+',"sexo":"'+this.sexo+'","pais":"'+this.pais+'","dni":"'+this.dni+'"}';
        }
    }
}