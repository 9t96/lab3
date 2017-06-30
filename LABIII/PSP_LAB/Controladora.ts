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

            marca   = (<HTMLInputElement>document.getElementById('txtMarca')).value;
            precio  = Number((<HTMLInputElement>document.getElementById('txtPrecio')).value);
            color   = (<HTMLInputElement> document.getElementById('txtColor')).value;

            console.log(color);

            let auto1:Auto = new Auto(marca,color,precio);

            //Traigo los autos para no pisar la info.
            let autosLS = JSON.parse(localStorage.getItem("autos"));
            //Si no hay autos deja el array vacio.
            let autosJson:Array<JSON> = autosLS !== null ? autosLS :[];
            //Transformo en json.
            autosJson.push(JSON.parse(auto1.ToJson()));
            //Los guardo en localstroge.
            localStorage.setItem("autos",JSON.stringify(autosJson));

            if (miHidden !== "") {

                this.EliminarAuto(parseInt(miHidden));    
                this.MostrarAuto();      
            }
                                   
        }

        public static MostrarAuto()
        {   
            let colorEnLetras:string;
            let autos = JSON.parse(localStorage.getItem("autos"));
            
            if(autos !== null)
            {   
               if(localStorage.length > 0)
               {
                    let tabla:string;

                    tabla+="<table class='table table-default'>"+
                        "<tr><th>Marca</th><th>Color</th><th>Precio</th><th>Acciones</th></tr>";

                    for (let index = 0; index < autos.length; index++) {

                        
                        switch (parseInt(autos[index].color)) {
                            case 1:
                                colorEnLetras = "Rojo";
                                break;
                            case 2:
                                colorEnLetras = "Negro";
                                break;                      
                            case 3:
                                colorEnLetras = "Blanco";
                                break;
                        }
                        
                        tabla+= "<tr>"+
                                "<td>"+autos[index].marca+"</td>"+
                                "<td>"+colorEnLetras+"</td>"+
                                "<td>"+autos[index].precio+"</td>"+
                                "<td>"+
                                "<a class='btn btn-danger' onclick='Entidades.Controladora.EliminarAuto("+index+")'>Eliminar</a>"+
                                "<a class='btn btn-warning' onclick='Entidades.Controladora.ModificarAuto("+index+")'>Modificar</a>"+
                                "</td>"+
                                "</tr>";              
                    }
                    

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

        /**
         * Llena los input con los datos de auto a modificar.
         * @param i Index del auto a modificar.
         */
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
            let colorEnLetras:string;
            let color = (<HTMLInputElement> document.getElementById('txtColor')).value;
            let autos = JSON.parse(localStorage.getItem("autos"));

            let autosXcolor = autos.filter(autos => autos.color == color);
          
            if(autosXcolor !== null)
            {   
               if(localStorage.length > 0)
               {
                    let tabla:string;

                    tabla+="<table class='table table-default'>"+
                        "<tr><th>Marca</th><th>Color</th><th>Precio</th><th>Acciones</th></tr>";

                    for (let index = 0; index < autosXcolor.length; index++) {

                        
                        switch (parseInt(autosXcolor[index].color)) {
                            case 1:
                                colorEnLetras = "Rojo";
                                break;
                            case 2:
                                colorEnLetras = "Negro";
                                break;                      
                            case 3:
                                colorEnLetras = "Blanco";
                                break;
                        }
                        
                        tabla+= "<tr>"+
                                "<td>"+autosXcolor[index].marca+"</td>"+
                                "<td>"+colorEnLetras+"</td>"+
                                "<td>"+autosXcolor[index].precio+"</td>"+
                                "<td>"+
                                "<a class='btn btn-danger' onclick='Entidades.Controladora.EliminarAuto("+index+")'>Eliminar</a>"+
                                "<a class='btn btn-warning' onclick='Entidades.Controladora.ModificarAuto("+index+")'>Modificar</a>"+
                                "</td>"+
                                "</tr>";              
                    }

                    tabla+="</table>";

                    (<HTMLInputElement> document.getElementById('divTabla')).innerHTML = tabla;
               }

        }



    }
}