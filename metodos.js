/**Los metodos son funciones que pertenecen a un objeto 
 * Acciones ejemplo de un carro
 * 1. Encender el motor
 * 2. acelerar 
 * 3. frenar
 * 4. girar volante 
 * 5. encender luces
 * 6. apagar luces
 * 7. ir en reversa
 * 8. tocar bocina
 * 9. limpiar el parabrisas
 * 10.apagar el motor
 * 
 * propiedades o atributos
 * 1. Color
 * 2. carroceria
 * 3. cilindraje
 * 4. marca
 * 5. modelo
 * 6. tipo de combustible
 * 7. velocidad
*/

const carro = {
    marca:'Toyota',
    modelo:'Corolla',
    velocidad: 0,

    //metodo para encender el carro
    encender: function(mensaje){
        this.mensaje="";
        console.log(mensaje);
    },

    //metodo para acelerar el carro
    acelerar: function(cantidad){
        this.velocidad += cantidad;
        console.log(`El carro acelera, su velocidad actual es ${this.velocidad}km/h.`);
    },

    //metodo para frenar el carro
    frenar: function(cantidad){
        //verificar si la velocidad actual ya es 0 
        if(this.velocidad === 0){
            console.log("El carro esta detenido, no se puede frenar mas");
            return
        }
        //si la velocidad no es 0 podemos frenar
        this.velocidad -= cantidad; 
        if(this.velocidad<0){
            this.velocidad = 0;
        }
        console.log(`El carro frena, su velocidad actual es ${this.velocidad}km/h.`);

    },


    // metodo para girar el volante
    girarVolanteD: function(){
        console.log(`El carro esta girando a la derecha`);
    },

    girarVolanteI: function(mensaje){
        this.mensaje="";
        console.log(mensaje);
    }
};

// ahora hacemos los llamados a esos metodos
/** Sintaxis nombreObjeto().nombreMetodo */

console.log(`El carro esta apagado`);
carro.encender("En relenti");
carro.acelerar(10);
carro.acelerar(30);
carro.acelerar(50);
carro.frenar(30);
carro.girarVolanteD();
carro.acelerar(20);
carro.frenar(10);
carro.girarVolanteI("El carro esta girando a la izquierda");
carro.frenar(30);
carro.frenar(30);
carro.frenar(15);
carro.acelerar(5);
carro.frenar(5);
carro.frenar();










