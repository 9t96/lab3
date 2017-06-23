
/**
 * Clase auto.
 */
namespace Entidades
{
    export class Auto {
    
        marca:string;
        precio:number;
        color:string;


        constructor(marca:string,color:string,precio:number) {
            this.marca = marca;
            this.color = color;
            this.precio = precio;
        }

        /**
        * Retorna el auto en formato JSON.
        */
        public ToJson():string
        {
            return  '{"marca":"'+this.marca+'","precio":'+this.precio+',"color":"'+this.color+'"}';
        }
    }
}