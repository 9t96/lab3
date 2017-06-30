
/**
 * Clase Persona.
 */
namespace Entidades
{
    export class Persona {
    
        nombre:string;
        edad:number;
        apellido:string;


        constructor(nombre:string,edad:number,apellido:string) {
            this.nombre = nombre;
            this.edad = edad;
            this.apellido = apellido;
        }

        /**
        * Retorna el auto en formato JSON.
        */
        public PersonaToString():string
        {
            return  '{"nombre":"'+this.nombre+'","apellido":"'+this.apellido+'","edad":"'+this.edad+'"';
        }
    }
}