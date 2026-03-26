/**conjunto de elementos
 * ejemplo          0           1           2
 * conjunto a = ["palabras", "letras", "nombres"];
 * b = [2,5,4,78,96,45];
 *
 * objeto {
 * nombre : "pepito",
 * apellido :"x",
 * edad: 15,
 * esHombre: true,
 * genero: "masculino"}
 *
 * Arrays
 */


// let misJuguetes = ["pelota", "avion", "oso","raqueta"];
// /*push() Agrega uno o mas elementos al final del array*/
// console.log("Los primeros juegues:" +misJuguetes);
// misJuguetes.push("carro", "patineta");
// console.log("mi array usando push: "+misJuguetes);


// /**pop() Eliminar el ultimo elementos del array */
// misJuguetes.pop();
// console.log(misJuguetes);


// /**unshift()   Agrega uno o mas elementos al principio del array*/
// misJuguetes.unshift("patineta", "nave espacial");
// console.log("Agregando nuevos al inicio: "+misJuguetes);


// /**shift () quita el primero */
// misJuguetes.shift();
// console.log("quitando el primero con shift: "+misJuguetes);




/**splice() cambia el contenido de un array update, delete, add */


// let miCanasta = ["manzana", "pera", "mango", "durazno"];
// console.log("mi canasta actual " +miCanasta);


/**reglas
 * Delete
 * 1.1 quitar desde la posicion X
 * 1.2 cuantas posiciones quiero quitar
 */


// let frutasRemovidas = miCanasta.splice(1,1);
//  console.log(" las frutas removidas " +frutasRemovidas);
//  console.log("mi canasta al final de usar splice "+miCanasta);


 /**Add
  * 2.1 desde donde quiero empezar a agregar
  * 2.2 CERO (0)
  * 2.3 Las cosas que quiero agregar
  */


//  miCanasta.splice(1,0,"maracuya", "melon","kiwi");
//  console.log("mi canasta despues de usar splice para agregar: "+miCanasta);


/**update
 * 3.1 posicion inicial
 * 3.2 cuantas quiero quitar desde esa posicion
 * 3.3 las cosas quiero reemplazar
 */


// let frutasRemplazadas = miCanasta.splice(0,2, "melon", "kiwi");
// console.log("las frutas que reemplace fueron : "+frutasRemplazadas);
// console.log("Mi canasta actualizada queda asi: "+miCanasta);


/*sort() Ordena los elementos de un array*/
// let misJuguetes = ["pelota", "avion", "oso","raqueta"];
// console.log("mis juguetes desordenados: "+misJuguetes);
// misJuguetes.sort();
// console.log("mis juguetes ordenados : " +misJuguetes);


// let edades = [10,2,25,5,1];
// edades.sort();
// console.log("edades ordenadas: "+edades);


// edades.sort(function(a,b){
//     //a es el primer numero que esta comparando
//     //b es el segundo numero a comparar


//     return b-a //si a es mas pequeno que b, entonces me va a dar un numero negativo entonces lo pone antes de b


//     //1,10,2,25,5
//     //1,2,10,25,5
//     //1,2,5,10,25
// });


edades.sort(function(a,b){
    return a-b
});
console.log(edades);




// console.log("El orden correcto es: "+edades);
