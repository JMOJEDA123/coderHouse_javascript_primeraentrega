//Condicionales simples

// let pais = prompt('Ingresa tu pais de nacimiento')

//     if (pais == 'venezuela'){
// console.log ('El usuario es venezolano');
// } else{
//     console.log('no eres Venezolano');
// }


//Otro Ejemplo

// let user_name = prompt('Ingresa tu usuario')

//     if (user_name == ''){
// console.log ('No ingresaste tu Usuario');
// } else{
//     console.log('Bienvenido nuevamente ' + user_name);
// }


//Ejemplo con Booleanos

// let esmayor = parseInt(prompt('Introduce tu edad'));

// if(esmayor>=18) {
//     console.log('Puedes ingresar al bar!!!');
// } else{
//     console.log('Disculpa, vuelve cuando cumplas 18 años');
// }


//Ejemplo operadores and y OR (&& - ||)

let user_name = prompt('Introduce tu usuario');
let contrasegna = prompt('Ingresa tu Contraseña');

if(user_name=='Pepe' && contrasegna=='1234'){
    console.log('bienvenido ' + user_name)
} else{
    console.log('Datos no valido. Intenta otra vez!!')
}
