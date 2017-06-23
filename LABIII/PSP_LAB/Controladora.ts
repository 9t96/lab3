///<reference path="Auto.ts"/>
namespace Entidades
{
    export class Controladora
    {
        public static AgregarAuto():void
        {
            let marca:string;
            let precio:number;
            let color:string;

           let miHidden:string = (<HTMLInputElement>document.getElementById('hdnIdAuto')).value;
          
           if(miHidden !== "")       
           {
                marca   = (<HTMLInputElement>document.getElementById('txtMarca')).value;
                precio  = Number((<HTMLInputElement>document.getElementById('txtPrecio')).value);
                color   = (<HTMLInputElement> document.getElementById('txtColor')).value;

                Controladora.EliminarAuto(Number((<HTMLInputElement>document.getElementById('miHidden')).value));              
           }


            
            let auto1:Auto = new Auto(marca,color,precio);

            let autosLS = JSON.parse(localStorage.getItem("autos"));

            let autosJson:Array<JSON> = autosLS !== null ? autosLS :[];

            autosJson.push(JSON.parse(auto1.ToJson()));

            localStorage.setItem("autos",JSON.stringify(autosJson));
                                   
        }

        public static MostrarAuto()
        {
            let autos = JSON.parse(localStorage.getItem("autos"));
            if(autos !== null)
            {   
               if(localStorage.length > 0)
               {
                    let tabla:string;

                    tabla+="<table class='table table-default'>"+
                        "<tr><th>Marca</th><th>Color</th><th>Precio</th><th>Acciones</th></tr>";

                    for (let index = 0; index < autos.length; index++) {
                        
                        tabla+= "<tr><td>"+autos[index].marca+"</td><td>"+autos[index].color+"</td><td>"+autos[index].precio+"</td><td><a class='btn btn-danger' onclick='Entidades.Controladora.ModificarAuto("+index+")'>Eliminar</a><a class='btn btn-warning' onclick='Entidades.Controladora.ModificarAuto("+index+")'>Modificar</a></tr>";

                        
                    }
                    
                    /*
                    autos.forEach(element => {
                        
                        tabla+= "<tr><td>"+element.marca+"</td><td>"+element.color+"</td><td>"+element.precio+"</td><td><a class='btn btn-danger' onclick='Entidades.Controladora.EliminarAuto()'>Eliminar</a><a class='btn btn-warning'>Modificar</a></tr>";
                        //console.log(element.marca+"-"+element.color+"-"+element.precio);
                    });*/

                    tabla+="</table>";

                    (<HTMLInputElement> document.getElementById('divTabla')).innerHTML = tabla;
               }
              
            }
        }

        public static EliminarAuto(i:number):void
        {
            let autosLS = JSON.parse(localStorage.getItem("autos"));

            let autosJson:Array<JSON> = autosLS !== null ? autosLS :[];

            autosJson.splice(i,1);

            localStorage.clear();

            localStorage.setItem("autos",JSON.stringify(autosJson));

            Controladora.MostrarAuto();

        }

        public static ModificarAuto(i:number):void
        {
            let autosLS = JSON.parse(localStorage.getItem("autos"));

            (<HTMLInputElement>document.getElementById('txtMarca')).value = autosLS[i].marca;
            (<HTMLInputElement>document.getElementById('txtPrecio')).value = autosLS[i].precio;
            (<HTMLInputElement> document.getElementById('txtColor')).value = autosLS[i].color;

            (<HTMLInputElement>document.getElementById('hdnIdAuto')).value= i.toString();
        }

        public static FiltrarPorColor()
        {

        }



    }
}