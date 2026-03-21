/** ingrese un numero de 1 3, escogio un plan, dependiendo ese plan le damos un precio usando una condicional vamos a darle un descuento dependiendo de la condicion */

//Capturar datos

// let entradaUsuario = prompt("Seleccione un plan 1.Basico, 2.Premium, 3.VIP");// se almacena en la variable 
// let plan = parseInt(entradaUsuario);//convertir a numero

// // alert(`usted ingreso el plan: ${plan}`);

// // validacion inicial
// if(isNaN(plan)){
//     alert("Por favor ingresa un numero, no texto");
// }else {
//     let mensajeFinal = "";
//     let precioBase = 0; 

//     /**estructura base del switch case 
//      * switch(){
//      * case x:
//      * realice lo que tenga que hacer 
//      * break;
//      * case y:
//      * realice lo que tenga que hacer dependiendo el caso
//      * break;
//      * default:
//      * haga todo lo que se indique para cerrar el ciclo
//      * }
//      */
//     switch(plan){
//         case 1:
//             precioBase = 100;
//             mensajeFinal = "Escogiste el plan basico (100)";
//             break;
//         case 2:
//             precioBase = 200;
//             let cupon = prompt("Tienes un cupón de descuento? (si/no)");
//             if(cupon === "si" || cupon === "SI" || cupon === "Si" || cupon === "sI"){
//                 precioBase = precioBase -50;
//                 mensajeFinal = "Escogiste el plan Premium y quedo con este precio final : $" + precioBase;
//             }else{
//                 mensajeFinal = "Plan Premium $" + precioBase;
//             }
//             break;
//         case 3:
//             mensajeFinal = "Escogiste el plan VIP y tienes acceso total";
//             break;
//         default:
//             mensajeFinal = "Este plan no existe";    
//     }
//     document.getElementById("pantalla").innerHTML = "<h3>" + mensajeFinal + "</h3>";
// }

/**for estructura base 
 *  for (inicializar valiable; medir la longitud del bucle; incrementar o decrementar segun se necesite ){
 * realice lo siguiente}
 */

// for (let i = 0; i<=10; i++ ){
//     console.log("Numero: "+i);
// }


// for (let i = 10; i>=1; i-- ){
//     console.log("Numero: "+i);
// }

/**while(condicion){
 * realice lo que tenga que hacer
 * } 
  */

// let i = 1;
// while (i <= 10){
//     console.log("Numero: "+i);
//     i++;
// }


let i =1;
do{
    console.log("Numero " +i);
    i++;
}while(i <= 10);



