
//Declaracion de Variables
let frecuenciaPago;
let tasaNomAnual;
let cantAgnos;
let numeroTotalCuotas;
let tasaIntEquiv;
let seleccionFrecuenciaPago;
let elijeTuAuto;
let costoAutoElegido;
let deseaFinanciamiento;
let montoFinanciar;
let anticipo;
let minimoAnticipo;


// Entrada de datos
elijeTuAuto = parseInt(prompt("Selecciona el Auto que Deseas Comprar:\n 1.- Dodge Caliber\n 2.- Jeep Cherokee\n 3.- Chrysler Neon\n 4.- Fiat Cronos\n 5.- Peugeot 207"));

//Sentencia Switch para Asignar auto seleccionado
switch (elijeTuAuto) {
    case 1:
        alert('Has elegido el auto: DODGE CALIBER cuyo costo es de AR$ 16.000.000');
        costoAutoElegido = 16000000;
        break

    case 2:
        alert('Has elegido el auto: JEEP CHEROKEE cuyo costo es de AR$ 36.000.000');
        costoAutoElegido = 36000000;
        break

    case 3:
        alert('Has elegido el auto: CHRYSLER NEON cuyo costo es de AR$ 12.000.000');
        costoAutoElegido = 12000000;
        break

    case 4:
        alert('Has elegido el auto: FIAT CRONOS cuyo costo es de AR$ 22.000.000');
        costoAutoElegido = 22000000;
        break

    case 5:
        alert('Has elegido el auto: PEUGEOT 207 cuyo costo es de AR$ 30.000.000');
        costoAutoElegido = 30000000;
        break

    default:
        alert('Selecciona una opcion Valida!!');
        break
}

//Entrada de datos para decidir si desea entregar anticipo 
alert("Podemos financiar hasta el 70% del valor del vehiculo!");
deseaFinanciamiento = parseInt(prompt("¿Desea Entregar Anticipo?\n 1.- Si\n 2.- No"));

//Validacion de entrada de valores validos
while (!(deseaFinanciamiento === 1 || deseaFinanciamiento === 2)) {
    alert("Elija una opcion valida!")
    deseaFinanciamiento = parseInt(prompt("¿Desea Entregar Anticipo?:\n 1.- Si\n 2.- No"));
}

//Bloque decision si se desea entregar anticipo / If anidado para validacion monto maximo del 70%
if (deseaFinanciamiento === 1) {
    anticipo = parseInt(prompt("Por favor Ingrese el Monto del anticipo que desea realizar:"));

minimoAnticipo= 0.3*costoAutoElegido;
alert("Se requiere que el anticipo sea mayor que AR$ " + minimoAnticipo);

    while (anticipo < minimoAnticipo){
        alert ("El monto de dinero que desea adelantar es menor al 30% del valor del costo del auto!");
        anticipo = parseInt(prompt("Por favor Ingrese el Monto del anticipo que desea realizar:"));
    }

    alert("¡Ha elegido entregar AR$ " + anticipo + " de anticipo!");
} else if (deseaFinanciamiento === 2) {
    anticipo = 0;
    alert("¡Eligio Entregar anticipo!");
}

//Monto a financiar para la adquisicion del auto
montoFinanciar = costoAutoElegido - anticipo;
alert(" El monto a Financiar es de AR$ " + montoFinanciar);

// Entrada de datos para calculo del financiamiento
tasaNomAnual = parseInt(prompt("Por favor ingrese la tasa Nominal Anual en %:"));
cantAgnos = parseInt(prompt(" Por favor indique la cantidad de años a Financiar:"));
seleccionFrecuenciaPago = parseInt(prompt("Selecciona la frecuencia de pago del prestamo:\n 1.- Mensual\n 2.- Bimensual\n 3.- Trimestral\n 4.- Cuatrimestral\n 5.- Semestral\n 6.- Anual"));

//Sentencia switch para asignar Frecuencia de pagos (Periodos de capitalizacion)
switch (seleccionFrecuenciaPago) {
    case 1:
        alert('Elegiste frecuencia de pago Mensual');
        frecuenciaPago = 12;
        break

    case 2:
        alert('Elegiste frecuencia de pago Binsual');
        frecuenciaPago = 6;
        break

    case 3:
        alert('Elegiste frecuencia de pago Trimestral');
        frecuenciaPago = 4;
        break

    case 4:
        alert('Elegiste frecuencia de pago Cuatrimestral');
        frecuenciaPago = 3;
        break

    case 5:
        alert('Elegiste frecuencia de pago Semestral');
        frecuenciaPago = 2;
        break

    case 6:
        alert('Elegiste frecuencia de pago Anual');
        frecuenciaPago = 1;
        break

    default:
        alert('Selecciona una opcion Valida!!');
        break
}

//Calculo de numero total de cuotas a financiar
numeroTotalCuotas = frecuenciaPago * cantAgnos;


//Calculo de tasa de interes equivalente
tasaIntEquiv = tasaNomAnual / frecuenciaPago
alert("la Tasa de interes Equivalente es de: " + tasaIntEquiv.toFixed(3));


//Funcion para calcular Tasa Efectiva Anual
function calcularTea(tasaNomAnual, numeroTotalCuotas) {
    return ((Math.pow(1 + (tasaNomAnual / 100) / numeroTotalCuotas, numeroTotalCuotas) - 1) * 100);
}
tea = calcularTea(tasaNomAnual, numeroTotalCuotas);

alert("La Tasa equivalente Anual (TEA) es de " + tea.toFixed(3) + "%");

numeroTotalCuotas
//Calculo de valor de la cuota de amortizacion
let pmt = montoFinanciar * (tasaIntEquiv / 100) / (1 - Math.pow(1 + (tasaIntEquiv / 100), -numeroTotalCuotas));


// alert ("Las cuotas quedan en: " + pmt.toLocaleString(undefined, { maximumFractionDigits: 2 }));
alert("Tu auto te lo puedes llevar en " + numeroTotalCuotas + " cuotas de " + pmt.toLocaleString(undefined, { maximumFractionDigits: 2 }));


// Encabezado de tabla de amortizacion
console.log("Cuota     " + "Saldo Inicial     " + "Amortizacion de Capital       " + "Intereses             " + "Saldo Final     ");



// Ciclo para calcular los pagos de todas las cuotas
let saldoInicial = montoFinanciar;

for (i = 1; i <= numeroTotalCuotas; i++) {
    let intereses = saldoInicial * tasaIntEquiv / 100;
    let amortizacion = pmt - intereses;
    let saldoFinal = saldoInicial - amortizacion;
    console.log("   " + i + "         " + saldoInicial.toFixed(2) + "                " + amortizacion.toFixed(2) + "               " + intereses.toFixed(2) + "               " + saldoFinal.toFixed(2));
    saldoInicial = saldoFinal;
}



