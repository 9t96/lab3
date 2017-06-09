class Auto {
    
    public color:string;
    public precio:number;

    constructor(color:string,precio:number) {
        
        this.color = color;
        this.precio = precio;
    }

    
    public getPrecio() : number {
        return this.precio;
    }

    public Mostrar():void
    {
        console.log(this.getPrecio() + "-" + this.color);
    }
 
}

//Si no se da tipo pincha el cosntructor salvo que se use LET.
let car = new Auto("Rojo",150000);

car.Mostrar();