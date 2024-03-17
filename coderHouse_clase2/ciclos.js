//Ciclo for

// for(let i=1; i<=10;i++){
//     console.log('Vuelta # ' +i);
// }




//Ejemplo ciclo - Tabla de Multiplicar

// let ingresaNumero = parseInt(prompt('Ingresa un numero'));

// for (let i=1; i<=10; i++){
//     resultado = ingresaNumero*i;
//     console.log ('El valor de ' + ingresaNumero + ' X ' + i + ' es igual a ' + resultado);
// };




//Ejemplo bucle para asignar turnos

// for (i=1 ; i<=5; i++){
//     let ingresaNombre = prompt('Ingresa tu nombre:');

//     console.log ('Turno: ' + i + ' de ' + ingresaNombre);
// } 

// console.log ('Se acabaron los turnos por el dia de hoy!!')



//Sentencia break - Ejemplo maximo numeros de intentos para loguearse

// userName ='Pepe'

// for(let i=1; i<=3; i++){

//     let introduceNombre  = prompt('Introduce tu usuario:');

//     if (introduceNombre == userName ){
//         console.log ('Bienvenido nuevamente ' + userName);
//         break
//     } else {
//         if(i==3){
//         alert ('Usuario bloquedo. Agotaste el numero de intentos validos');
//         }
//     }
// }



//Sentencia continue - Ejemplo ignorar notas de alumnos aplazados

// for(let i=1; i<=5; i++){
//     let ingresaNota = parseFloat((prompt('Ingresa nota del alumno # ' + i)));

//     if(ingresaNota<7){
//         continue;
//     }

//     console.log ('Felicidades!! el alumno # ' + i +' ha aprobado la materia con una nota de ' + ingresaNota);
// }


//Sentencia Switch

let codigo = parseInt(prompt('Ingresa un codigo del sabor que deseas de la empanada: \n 1.- Cazon \n 2.- Queso \n 3.- Carne \n 0.- Salir'));


while (codigo!= 0){

    switch(codigo){

        case 1:
        alert ('El precio de la empanada de cazon es de AR$ 800');
        break
    
        case 2:
        alert ('El precio de la empanada de Queso es de AR$ 500');
        break
    
        case 3:
        alert ('El precio de la empanada de Carne es de AR$ 700');
        break
    
        default:
        alert ('Selecciona una opcion valida!');
        break
    }

    codigo = parseInt(prompt('Ingresa un codigo del sabor que deseas de la empanada: \n 1.- Cazon \n 2.- Queso \n 3.- Carne \n 0.- Salir'));

};
alert ('Gracias por su compra!!');















