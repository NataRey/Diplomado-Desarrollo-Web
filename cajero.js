const cuentaBancaria ={
    saldo: 10000,
    tipo: "ahorros",

   

    verSaldo : function(){
        console.log(`Su saldo actual es:$${this.saldo}`);
    },

    depositar : function(cantidad){
        if(cantidad <= 0 || isNaN(cantidad) ){
            console.log("No puede realizar el deposito valide nuevamente");
        }else if(cantidad > 0 ){
            this.saldo += cantidad;
             console.log(`Se ha depositado $${cantidad}`);
             this.verSaldo();
        }//else{
        //     console.log(`La catidad ingresada debe ser un numero`);
        // }
    },

    retirar: function(cantidad){
        if(cantidad > 0 && cantidad <= this.saldo){
            this.saldo -= cantidad;
            console.log(`Se ha retirado $${cantidad}`);
            this.verSaldo();
        }else if(cantidad > this.saldo){
            console.log(`Fondos insuficientes para realizar esta operacion`);
            this.verSaldo();
        }else{
            console.log(`Error: La cantidad a retirar nopuede contener letras o ser negativa`);
        }
    }
};

console.log("*** saldo inicial ***");
cuentaBancaria.verSaldo();

console.log("*** area depositos ***");
cuentaBancaria.depositar(5000);
cuentaBancaria.depositar(-500);
cuentaBancaria.depositar("a");

console.log("*** area de retiros ***");
cuentaBancaria.retirar(-5);
cuentaBancaria.retirar("a");
cuentaBancaria.retirar(20000);
cuentaBancaria.retirar(2000);


