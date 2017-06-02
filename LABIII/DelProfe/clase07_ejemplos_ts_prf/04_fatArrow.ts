 //LAS SIGUIENTES FUNCIONES SON EQUIVALENTES. 

 let f1 = function ( i : number ) : number { return i * i;  }
 
 //EL TIPO DE RETORNO ES INFERIDO POR EL COMPILADOR
 let f2 = function ( i : number ) { return i * i;  }

 //SINTAXIS DE "Fat arrow"
 let f3 = ( i : number ) : number => { return i * i;  }

 //SINTAXIS DE "Fat arrow" CON TIPO DE RETORNO INFERIDO
 let f4 = ( i : number ) => { return i * i;  }

 //SINTAXIS DE "Fat arrow" CON TIPO DE RETORNO INFERIDO,
 //SI NO TIENE LLAVES({}) NO NECESITA 'RETURN'
 let f5 = ( i : number ) => i * i ;

//LAS "Fat arrows" CAMBIARON COMO EL 'this' ES MANEJADO 
// ANTES...
// EN ES5, `bind()` or var that = this; ERAN NECESARIAS, YA QUE LAS FUNCIONES
// CREAN SU PROPIO this. 
// POR ESTO SE DEBIA ALMACENAR LA REFERENCIA O UTILIZAR EL BINDEO

// DEFINICION GLOBAL DE this.i
this.i = 100;

var counterA = new CounterA();
var counterB = new CounterB();
var counterC = new CounterC();
var counterD = new CounterD();

// MAL EJEMPLO
function CounterA() {
  // EL 'this' DE CounterA ES IGNORADO
  this.i = 0;
  setInterval(function () {
    //'this' REFIERE AL OBJETO GLOBAL, NO AL DE CounterA 
    // POR ESO COMIENZA EN 100 EN VEZ DE 0
    this.i++;
    console.log("counterA: "+ this.i);
  }, 500);
}

// BINDEO MANUAL 'that = this'
function CounterB() {
  this.i = 0;
  var that = this;
  setInterval(function() {
    that.i++;
    console.log("counterB: "+ that.i);
  }, 500);
}

// USANDO EL .bind(this)
function CounterC() {
  this.i = 0;
  setInterval(function() {
    this.i++;
    console.log("counterC: "+this.i);
  }.bind(this), 500);
}

// CON fat arrow
function CounterD() {
  this.i = 0;
  setInterval(() => {
    this.i++;
    console.log("counterD: "+ this.i);
  }, 500);
}
